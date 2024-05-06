import { useRouter } from 'next/router';
import styles from '@/styles/directory.module.css';
import DishCard from '@/components/DishCard';
import DishInventory from '@/data/DishInventory';
import Header from '@/components/Header';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Filter from '@/components/Filter';

export default function Directory() {
  const router = useRouter();
  const { category } = router.query;

  const onSelectCategory = (selectedCategory) => {
    router.push(`/directory?category=${encodeURIComponent(selectedCategory)}`);
  };

  const filteredDishes = category ? DishInventory.filter(dish =>
    dish.categories.includes(category)
  ) : DishInventory;

  return (
    <>
      <Head>
        <title>Pine — Dish Directory</title>
        <meta name="description" content="Dish directory." />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.directoryContainer}>
          <Header />
          <h1 className={styles.title}>Category</h1>
          {filteredDishes.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
          <Footer />
        </div>
      </main>
    </>
  );
}
function getUniqueCategories() {
  const allCategories = DishInventory.reduce((categories, dish) => {
    return [...categories, ...dish.categories];
  }, []);

  return Array.from(new Set(allCategories));
}
