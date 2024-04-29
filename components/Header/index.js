import Link from 'next/link';
import styles from './Header.module.css';
import { useRouter } from 'next/router';

export default function Header(){
  const router = useRouter();

  const goBack = () => {
    router.back();
  }
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
        </ul>
      </nav>
    </header>
  );
}