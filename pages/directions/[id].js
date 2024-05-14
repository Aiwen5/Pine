import React from 'react';
import { useRouter } from 'next/router';
import DishInventory from '@/data/DishInventory';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Directions.module.css';
import LottieAnimation from '@/components/Animation/LottieAnimation';
import Button from '@/components/Button';
import animationData from '@/animations/panTree.json';

export default function Directions() {
  const router = useRouter();
  const { id } = router.query;
  const dish = DishInventory.find(d => d.id.toString() === id);

  if (!dish) {
    return <LottieAnimation className={styles.lottieContainer} animationData={animationData} height={250} />;
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
            <h1 className={styles.title}>How To Make {dish.name}</h1>
            <ol className={styles.stepsList}>
              {dish.steps.map((step, index) => (
                <li key={index} className={styles.stepItem}>
                  <span className={styles.stepNumber}>Step {index + 1}.</span>
                  <p className={styles.stepText}>{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
