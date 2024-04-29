import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './T3.module.css'; 
import Button from '../Button';

export default function T3({ selectedOption, onAnswerChange, onNext, onPrev }) {

 const handleOptionChange = (event) => {
        onAnswerChange('T3', event.target.value);
      };

    return(
        <>
        <Head>
        <title>Tutorial 3</title>
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
            <img src='/Step3.svg' alt='Step1'></img>
        </div>
        <div className={styles.tutorialDesc}>
            <h2>Step 3</h2>
            <p>Enjoy Your Meal</p>
        </div>
        <div className={styles.bar}>
        <img className={styles.progressBar} src="/T3.png" alt="progress bar"></img>
        </div>
      <Button placeholder="Back" onClick={onPrev}  />
      <Button placeholder="Next Question" onClick={onNext} />
      </div>
      </main>
        </>
    )
}