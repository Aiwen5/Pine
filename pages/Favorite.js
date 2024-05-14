import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Favorite.module.css';
import Head from 'next/head';

export default function Favorite() {

  return (
    <>
      <Head>
        <title>Shopping List</title>
        <meta name="description" content="Created by Daniel Der & Evan Schatz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Header />
          <div className={styles.outerContentContainer}>
            <h1 className={styles.title}>Favorites</h1>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
