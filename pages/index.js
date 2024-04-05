import Head from 'next/head'
import Image from 'next/image'
import Button from '@/components/Button'
import styles from '@/styles/LandingPage.module.css'

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Pine</title>
        <meta name="description" content="Created by Daniel Der & Evan Schatz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <h1 className={styles.title}>Welcome To</h1>
        <Image src="/PineLogo.svg" alt="Pine Logo" width={300} height={300} />
        <div className={styles.buttons}>
          <Button 
            placeholder="Get Started!"
          />
          <Button 
            placeholder="Quiz Me"
          />
          <Button 
            placeholder="Tutorial"
          />
        </div>
      </main>
    </>
  )
}