import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DishInventory from '@/data/DishInventory';
import Nutrition from '@/components/Nutrition/Nutrition';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Description.module.css';
import Head from 'next/head';
import LottieAnimation from '@/components/Animation/LottieAnimation';
import animationData from '@/animations/panTree.json';

export default function DishDescription() {
  const router = useRouter();
  const { id } = router.query;

  const dish = DishInventory.find((d) => d.id.toString() === id);
  const [showNutrition, setShowNutrition] = useState(false);

  if (!dish) {
    return <LottieAnimation className={styles.lottieContainer} animationData={animationData} height={250} />
  }

  return (
    <>
      <Head>
        <title>{dish.name} - Dish Description</title>
        <meta name="description" content={`Learn more about ${dish.name}`} />
        <title>{dish.name} - Description</title>
        <meta name="description" content={`Learn more about ${dish.name}`} />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.descriptionContainer}>
          <Header />

          <div className={styles.imageContainer}>
            <img src={dish.image} alt={dish.name} className={styles.dishImage} />
          </div>
          <div className={styles.descriptionCard}>
            <div className={styles.row1}>
              <h2 className={styles.dishName}>{dish.name}</h2>
              <button onClick={() => setShowNutrition(!showNutrition)} className={styles.nutritionButton}>
                Nutrition
              </button>
            </div>
            <div className={styles.categories}>
              {dish.categories.map((category, index) => (
                <span key={index} className={styles.category}>{category}</span>
              ))}
            </div>
            <p className={styles.dishDescription}>{dish.description}</p>
            <div className={styles.buttonContainer}>
              <Button placeholder="Find Near Me" />
              <Button placeholder="Recipe" />
            </div>
          </div>
          {showNutrition && (
            <div className={styles.nutritionPopup}>
              <div className={styles.inline}>
                <h2 className={styles.popupTitle}>{dish.name}</h2>
                <button onClick={() => setShowNutrition(false)} className={styles.closeButton}>X</button>
              </div>
              <Nutrition nutritionData={dish.nutrition} />
            </div>
          )}
          {showNutrition && (
            <div className={styles.backdrop} onClick={() => setShowNutrition(false)}></div>
          )}
          <Footer />
        </div>
      </main>
    </>
  );
}