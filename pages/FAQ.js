import Head from 'next/head';
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from '@/styles/FAQ.module.css';

export default function FAQ() {

    return(
        <>
        <Head>
        <title>FAQ</title>
        <meta name="description" content="Created by Daniel Der & Evan Schatz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <div className={styles.content}>
        <p className={styles.head}>Frequently Asked Questions</p>
        <div className={styles.question}>
        <p className={styles.subhead}>How can I find a recipe for a specific dish i want?</p>
        <p>Navigate to the search area by clicking the search icon in the bottom right, then search by keyword and click the recipe you want.</p>
        </div>
        <div className={styles.question}>
        <p className={styles.subhead}>Can I save recipes for later?</p>
        <p>Yes! Simply navigate to the dish you want to save amd click the ehart icon and the dish will be saved into your favorites section.</p>
        </div>
        <div className={styles.question}>
        <p className={styles.subhead}>Can I find a restaurant near me if I don't want to cook?</p>
        <p>Yes! Navigate to the dish you want then click on the "Find Near Me" button and then click the map. You will be directed to google maps</p>
        </div>
        </div>
        <Footer/>
      </main>
        </>
    )
}