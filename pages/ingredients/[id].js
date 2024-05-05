import React from 'react';
import { useRouter } from 'next/router';
import DishInventory from '@/data/DishInventory';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Ingredients.module.css';
import LottieAnimation from '@/components/Animation/LottieAnimation';
import animationData from '@/animations/panTree.json';

export default function Ingredients() {
  const router = useRouter();
  const { id } = router.query;
  const dish = DishInventory.find(d => d.id.toString() === id);

  if (!dish) {
    return <LottieAnimation className={styles.lottieContainer} animationData={animationData} height={250} />
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <Header />
          <div className={styles.imageContainer}>
            <img src={dish.image} alt={dish.name} className={styles.dishImage} />
          </div>
          <div className={styles.informationContainer}>
            <h1>{dish.name} Ingredients</h1>
            <ul>
              {dish.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
