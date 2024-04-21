import Head from 'next/head'
import Image from 'next/image'
import Button from '@/components/Button'
import styles from '@/styles/LandingPage.module.css'
import Link from 'next/link'

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
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome To</h1>
          <Image src="/PineLogo.svg" alt="Pine Logo" width={300} height={300} priority={true} />
          <div className={styles.buttons}>
          <Link href="/Home">
            <Button 
              placeholder="Get Started!"
            />
            </Link>
            <Link href="/quiz">
            <Button 
              placeholder="Quiz Me"
            />
            </Link>
            <Link href="/Description">
            <Button 
              placeholder="Tutorial"
            />
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}