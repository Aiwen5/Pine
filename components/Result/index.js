import { useState, useEffect } from "react";
import Button from "../Button";
import styles from "@/components/Result/Result.module.css";
import LottieAnimation from '@/components/Animation/LottieAnimation';
import animationData from '@/animations/panTree.json';

export default function Result({ answers, onRestart }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
    const diet = encodeURIComponent(answers.Q1);
    const cuisine = encodeURIComponent(answers.Q4);
    const number = 3;
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${cuisine}&diet=${diet}&number=${number}&apiKey=${apiKey}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data.results);
      } catch (error) {
        console.error('Error fetching data from Spoonacular:', error);
      }
    };

    fetchData();
  }, [answers]);

  return (
    <main className={styles.main}>
      <h1>Quiz Results</h1>
      {recipes.length > 0 ? (
        <div className={styles.recipeList}>
          <h2 className={styles.reccomend}>Top 3 Recommended Dishes For You</h2>
          {recipes.map((recipe, index) => (
            <div className={styles.recipeItem} key={index}>
              <h3>{recipe.title}</h3>
              <img className={styles.recipeImage} src={recipe.image} alt={recipe.title} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <LottieAnimation className={styles.lottieContainer} animationData={animationData} height={250} />
          <p>Loading...</p>
        </div>
      )}
      <div className={styles.buttons}>
        <Button placeholder="Restart Quiz" onClick={onRestart} />
        <Button placeholder="Done" href="/" />
      </div>
    </main>
  );
}
  