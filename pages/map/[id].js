import React from 'react';
import { useRouter } from 'next/router';
import DishInventory from '@/data/DishInventory';
import RestaurantMap from '@/components/RestaurantMap';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/MapPage.module.css';

export default function MapPage() {
  const router = useRouter();
  const { id } = router.query;
  const dish = DishInventory.find(d => d.id.toString() === id);

  if (!dish) {
    return <p>Dish not found</p>;
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
            <h1>Find {dish.name} Near You</h1>
            <RestaurantMap dishName={dish.name} />
          </div>
          <Footer />
        </div>
      </main>
      
    </>
  );
}
