import React from 'react';
import { useRouter } from 'next/router';
import DishInventory from '@/data/DishInventory';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Ingredients.module.css';

export default function Ingredients() {
  const router = useRouter();
  const { id } = router.query;
  const dish = DishInventory.find(d => d.id.toString() === id);

  if (!dish) {
    return <p>Loading... or Dish not found</p>;
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Ingredients for {dish.name}</h1>
        <ul>
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
