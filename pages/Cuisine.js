import Head from 'next/head';
import styles from '@/styles/Cuisine.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Q4() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Created by Daniel Der & Evan Schatz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <h1>What Is Your Favourite Kind Of Cuisine</h1>
        <div className={styles.radioOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="Italian Cuisine"
              checked={selectedOption === 'Italian Cuisine'}
              onChange={handleOptionChange}
            />
            Italian
          </label>
        </div>
        <div className={styles.radioOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="Indian Cuisine"
              checked={selectedOption === 'Indian Cuisine'}
              onChange={handleOptionChange}
            />
            Indian
          </label>
        </div>
        <div className={styles.radioOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="American Cuisine"
              checked={selectedOption === 'American Cuisine'}
              onChange={handleOptionChange}
            />
            American
          </label>
        </div>
        <div className={styles.radioOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="Asian Cuisine"
              checked={selectedOption === 'Asian Cuisine'}
              onChange={handleOptionChange}
            />
            Asian
          </label>
        </div>
        <Link href="/Skill">
          <Button 
            placeholder="Back"
          />
          </Link>
          <Link href={{ pathname: '/Result', query: { selectedOption4: selectedOption } }}>
          <Button 
            placeholder="Next"
          />
          </Link>
        </main>
      </>
    )
  }
