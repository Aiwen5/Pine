import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './T4.module.css'; 
import Button from '../Button';

export default function T4({ selectedOption, onAnswerChange, onPrev }) {

 const handleOptionChange = (event) => {
        onAnswerChange('T4', event.target.value);
      };
const TutorialButton = ({ text, onClick, href }) => {
        return (
            <button className={styles.button} onClick={onClick}>
                {text}
            </button>
        );
    };

    return(
        <>
        <Head>
        <title>Tutorial 4</title>
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
            <img src='/Step4.svg' alt='Step1'></img>
        </div>
        <div className={styles.tutorialDesc}>
            <h2>Step 4</h2>
            <p>Add the dish to your favourites page to easily find it again</p>
        </div>
        <div className={styles.bar}>
        <img className={styles.progressBar} src="/T4.png" alt="progress bar"></img>
        </div>
      <TutorialButton text="Back" onClick={onPrev} />
      <TutorialButton text="Complete" href="/"/>
      <TutorialButton text="Take The Quiz" href="/quiz"/>
      </div>
      </main>
        </>
    )
}