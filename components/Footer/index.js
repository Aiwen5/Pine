import Link from 'next/link';
import styles from "@/components/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageContainer}>
        <Link href="/Home">
          <img src="/Home.svg" alt="Image 1" className={styles.image1}/>
        </Link>
        <Link href="/ShoppingList">
          <img src="/ShoppingList.svg" alt="Image 2" className={styles.image2}/>
        </Link>
        <Link href="/Favorite">
          <img src="/Favorite1.svg" alt="Image 3" className={styles.image3}/>
        </Link>
        <Link href="/Home">
          <img src="/Search.svg" alt="Image 4" className={styles.image4}/>
        </Link>
      </div>
    </footer>
  );
}
