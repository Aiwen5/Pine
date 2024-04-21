import Link from 'next/link';
import styles from "@/components/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageContainer}>
        <Link href="/Home">
          <img src="/Logo.svg" alt="Image 1" />
        </Link>
        <Link href="/Home">
          <img src="/Logo.svg" alt="Image 2" />
        </Link>
        <Link href="/Home">
          <img src="/Logo.svg" alt="Image 3" />
        </Link>
        <Link href="/Home">
          <img src="/Logo.svg" alt="Image 4" />
        </Link>
      </div>
    </footer>
  );
}
