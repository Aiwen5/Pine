import Head from 'next/head'
import styles from '@/styles/Q3.module.css'

export default function Q3() {
    return (
      <>
        <Head>
          <title>Quiz</title>
          <meta name="description" content="Created by Daniel Der & Evan Schatz" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${styles.main}`}>
          <h1>Question 3</h1>
          
        </main>
      </>
    )
  }