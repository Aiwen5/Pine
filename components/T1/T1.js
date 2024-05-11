import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './T1.module.css'; 
import Button from '../Button';

export default function T1({ selectedOption, onAnswerChange, onNext }) {

 const handleOptionChange = (event) => {
        onAnswerChange('T1', event.target.value);
      };

    return(
        <>
        <Head>
        <title>Tutorial 1</title>
        <meta name="description" content="Created by Daniel Der & Evan Schatz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.tutorialcontainer}>
        <div className={styles.SkipSection}>
        <a className={styles.skip} href="/">Skip</a>
        </div>
        <div className={styles.imagecontainer}>
            <img src='/Step1.svg' alt='Step1'></img>
        </div>
        <div className={styles.tutorialDesc}>
            <h1>Step 1</h1>
            <h2>Find a dish You're craving</h2>
        </div>
        <div className={styles.bar}>
          <progress className={`${styles.progress} ${styles.p1}`} value={1}></progress>
          <progress className={`${styles.progress} ${styles.p0}`} value={0}></progress>
          <progress className={`${styles.progress} ${styles.p0}`} value={0}></progress>
          <progress className={`${styles.progress} ${styles.p0}`} value={0}></progress>
        </div>
        <div className={styles.buttoncontainer}>
          <Button placeholder="Next" onClick={onNext} />
        </div>
      </div>
      </main>
        </>
    )
}
