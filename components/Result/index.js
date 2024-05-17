import { useState, useEffect } from "react";
import Button from "../Button";
import styles from "@/components/Result/Result.module.css";
import LoadingScreen from "@/components/LoadingScreen";
import { useRouter } from 'next/router';

export default function Result({ answers, onRestart }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
    const diet = encodeURIComponent(answers.Q1);
    const cuisine = encodeURIComponent(answers.Q4);
    const number = 3;
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${cuisine}&diet=${diet}&number=${number}&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        null;
      })
      .then((data) => {
        setRecipes(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data from Spoonacular:', error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [answers.Q1, answers.Q4]);

  const doneQuiz = () => {
    setShowLoadingScreen(true);
  };

  if (showLoadingScreen) {
    return <LoadingScreen answers={answers} />;
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Quiz Results</h1>
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : recipes.length > 0 ? (
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
          <p>No recipes found.</p>
        )}
        <div className={styles.buttons}>
          <Button placeholder="Restart Quiz" onClick={onRestart} />
          <Button placeholder="Done" onClick={doneQuiz} />
        </div>
      </div>
    </main>
  );
}
