import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './T4.module.css'; 
import Button from '../Button';

export default function T4({ onAnswerChange,}) {

 const handleOptionChange = (event) => {
        onAnswerChange('T4', event.target.value);
      };
const TutorialButton = ({ text, onClick, href }) => {
    if (href) {
        return (
          <Link href={href}>
            <button className={styles.button} onClick={onClick}>
            {text}
          </button>
          </Link>
        );
      } else {
        return (
          <button className={styles.button} onClick={onClick}>
            {text}
          </button>
        );
      }
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
        <div className={styles.imagecontainer}>
            <img src='/Step4.svg' alt='Step1'></img>
        </div>
        <div className={styles.tutorialDesc}>
            <h1>Step 4</h1>
            <h2>Add the dish to your favourites page to easily find it again</h2>
        </div>
        <div className={styles.bar}>
      <progress className={styles.p0} value={0} />
      <progress className={styles.p0} value={0} />
      <progress className={styles.p0} value={0} />
      <progress className={styles.p1} value={1} />
        </div>
        <div className={styles.buttoncontainer}>
      <Button placeholder="Take The Quiz" href="/quiz"/>
      <Button placeholder="Done" href="/"/>
      </div>
      </div>
      </main>
        </>
    )
}
