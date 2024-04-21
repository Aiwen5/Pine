import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
        <li>
            <Link href="/">
              <div className={styles.logoContainer}>
              <img src='/Back.svg' alt='back' className={styles.Back}/>
                <img src='/PineLogo.svg' alt="Pine Logo" className={styles.Logo}/>
              </div>
            </Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
