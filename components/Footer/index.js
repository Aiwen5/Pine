import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image
import styles from "@/components/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageContainer}>
        <div className={styles.iconContainer}>
          <Link href="/Home">
            <Image src="/HomeIcon.svg" alt="Home" width={40} height={30} />
            <p className={styles.iconText}>Home</p>
          </Link>
        </div>

        <div className={styles.iconContainer}>
          <Link href="/ShoppingList">
            <Image src="/ListIcon.svg" alt="Shopping List" width={40} height={30} />
            <p className={styles.iconText}>Shopping List</p>
          </Link>
        </div>

        <div className={styles.iconContainer}>
          <Link href="/Favorite">
            <Image src="/Favorite.svg" alt="Favorites" width={40} height={30} />
            <p className={styles.iconText}>Favorites</p>
          </Link>
        </div>

        <div className={styles.iconContainer}>
          <Link href="/Search">
            <Image src="/SearchIcon.svg" alt="Search" width={40} height={30} />
            <p className={styles.iconText}>Search</p>  
          </Link>
        </div>
      </div>
    </footer>
  );
}
