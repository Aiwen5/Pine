import Head from 'next/head';
import styles from '@/styles/Result.module.css'; 
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Result() {
    return (
        <>
          <Head>
            <title>Quiz</title>
            <meta name="description" content="Created by Daniel Der & Evan Schatz" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={`${styles.main}`}>
          <div className={styles.buttonContainer}>
          <Link href="/Diet">
            <Button placeholder="Retake Quiz" />
          </Link>
          <Link href="/Home">
            <Button placeholder="Done" />
          </Link>
        </div>
          </main>
          </>
  );
}
