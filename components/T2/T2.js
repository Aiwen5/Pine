import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './T2.module.css'; 
import Button from '../Button';

export default function T1({ selectedOption, onAnswerChange, onNext, onPrev }) {

 const handleOptionChange = (event) => {
        onAnswerChange('T2', event.target.value);
      };

    return(
        <>
        <Head>
        <title>Tutorial 2</title>
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
            <img src='/Step2.svg' alt='Step1'></img>
        </div>
        <div className={styles.tutorialDesc}>
            <h2>Step 2</h2>
            <p>Choose to pick it up for takeout or make it with our recipe</p>
        </div>
        <div className={styles.bar}>
        <img className={styles.progressBar} src="/T2.png" alt="progress bar"></img>
        </div>
      <Button placeholder="Back" onClick={onPrev}  />
      <Button placeholder="Next Question" onClick={onNext} />
      </div>
      </main>
        </>
    )
}