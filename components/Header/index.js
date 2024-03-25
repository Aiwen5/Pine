import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
        <li className={styles.Logo}><Link href="/home">Pine</Link></li>
          <li className={styles.Menu}><Link href="/news">HambMenu</Link></li>
          <li className={styles.Search}><Link href="/contact">Search</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
