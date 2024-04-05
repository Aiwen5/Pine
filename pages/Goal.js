import Head from 'next/head';
import styles from '@/styles/Goal.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Q2() {
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
        <h1>Do You Have Any Health Goals?</h1>
        <div className={styles.radioOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
            />
            Option 1
          </label>
        </div>
        <div className={styles.radioOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
            />
            Option 2
          </label>
        </div>
        <div className={styles.radioOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="option3"
              checked={selectedOption === 'option3'}
              onChange={handleOptionChange}
            />
            Option 3
          </label>
        </div>
        <div className={styles.radioOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="option4"
              checked={selectedOption === 'option4'}
              onChange={handleOptionChange}
            />
            Option 4
          </label>
        </div>
        <Link href="/Diet">
          <Button placeholder="Back" />
        </Link>
        <Link href="/Skill">
          <Button placeholder="Next" />
        </Link>
      </main>
    </>
  );
}
