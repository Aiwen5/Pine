import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DishInventory from '@/data/DishInventory';
import Header from '@/components/Header';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/Ingredients.module.css';
import LottieAnimation from '@/components/Animation/LottieAnimation';
import animationData from '@/animations/panTree.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Ingredients() {
  const router = useRouter();
  const { id } = router.query;
  const dish = DishInventory.find(d => d.id.toString() === id);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  useEffect(() => {
    const storedIngredients = sessionStorage.getItem('selectedIngredients');
    if (storedIngredients) {
      setSelectedIngredients(JSON.parse(storedIngredients));
    }
  }, []);

  const handleAddClick = (ingredient) => {
    const updatedIngredients = [...selectedIngredients, ingredient];
    setSelectedIngredients(updatedIngredients);
    sessionStorage.setItem('selectedIngredients', JSON.stringify(updatedIngredients));
    toast.success('Item added to shopping list', {
      className: styles.customToast
    });
  };

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
            <h1>{dish.name} Ingredients</h1>
            <ul className={styles.ingredientsList}>
              {dish.ingredients.map((ingredient, index) => (
                <li key={index} className={styles.ingredientItem}>
                  <span className={styles.ingredientText}>{ingredient}</span>
                  <input
                    type="checkbox"
                    className={styles.ingredientCheckbox}
                  />
                  <button onClick={() => handleAddClick(ingredient)} className={styles.addButton}>Add
                    <Image src="/ListIconLight.svg" alt="Shopping List" width={20} height={15} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <Footer />
        </div>
      </main>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        className={styles.toastContainerCustom}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
