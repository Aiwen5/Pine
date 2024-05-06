import Link from 'next/link';
import styles from './Header.module.css';
import { useRouter } from 'next/router';
import Filter from '../Filter';
import DishInventory from '@/data/DishInventory';

export default function Header() {
  const router = useRouter();

  const onSelectCategory = (selectedCategory) => {
    router.push(`/directory?category=${encodeURIComponent(selectedCategory)}`);
  };

  const goBack = () => {
    router.back();
  };

  const isHomePage = router.pathname === "/Home";
  const isDescriptionPage = router.pathname.startsWith("/description/");
  const isIngredientsPage = router.pathname.startsWith("/ingredients/");
  const isDirectionsPage = router.pathname.startsWith("/directions/");
  const isDirectoryPage = router.pathname.startsWith("/directory");

  const hideFilterOnPages = isDescriptionPage || isIngredientsPage || isDirectionsPage || isDirectoryPage;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li onClick={goBack} className={styles.backButton}>
            <img src='/Back.svg' alt='back' className={styles.backIcon} />
          </li>
          <li>
            <Link href="/Home" legacyBehavior>
              <a>
                <img src='/PineLogo.svg' alt="Pine Logo" className={styles.Logo}/>
              </a>
            </Link>
          </li>
          {(!isHomePage && !hideFilterOnPages) && (
            <li>
              <Filter categories={getUniqueCategories()} onSelectCategory={onSelectCategory} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

function getUniqueCategories() {
  const allCategories = DishInventory.reduce((categories, dish) => {
    return [...categories, ...dish.categories];
  }, []);

  return Array.from(new Set(allCategories));
}
