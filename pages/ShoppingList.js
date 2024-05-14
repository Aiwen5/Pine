import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/ShoppingList.module.css';
import Head from 'next/head';

export default function ShoppingList() {
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    const storedIngredients = sessionStorage.getItem('selectedIngredients');
    if (storedIngredients) {
      setIngredientList(JSON.parse(storedIngredients));
    }
  }, []);

  const clearList = () => {
    sessionStorage.removeItem('selectedIngredients');
    setIngredientList([]);
  };

  return (
    <>
      <Head>
        <title>Shopping List</title>
        <meta name="description" content="Created by Daniel Der & Evan Schatz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Header />
          <div className={styles.outerContentContainer}>
            <h1>Shopping List</h1>
            <div className={styles.contentContainer}>
              <ul className={styles.ingredientsList}>
                {ingredientList.map((ingredient, index) => (
                  <li key={index} className={styles.ingredientItem}>
                    <span className={styles.ingredientText}>{ingredient}</span>
                    <input
                      type="checkbox"
                      className={styles.ingredientCheckbox}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={clearList} className={styles.clearButton}>Clear List</button>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
