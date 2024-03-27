import Head from 'next/head'
import Button from '@/components/Button'
import styles from '@/styles/LandingPage.module.css'

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Pine</title>
        <meta name="description" content="Created by Daniel Der & Evan Schatz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <h1 className={styles.title}>Welcome To Pine!</h1>
        <img
          className={styles.logo}
          src="./images/logo"
          alt="Pine's logo"
        >
        </img>
        <Button 
          placeholder="Get Started!"
        />
        <Button 
          placeholder="Quiz Me"
        />
        <Button 
          placeholder="Tutorial"
        />
      </main>
    </>
  )
}