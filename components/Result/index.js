import { useState, useEffect } from "react";
import Button from "../Button";
import styles from "@/components/Result/Result.module.css";

export default function Result({ answers, onRestart }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_EDAMAM_APP_ID;
    const appKey = process.env.NEXT_PUBLIC_EDAMAM_API_KEY;
    const diet = answers.Q1
    const cuisine = answers.Q4;
    const url = `https://api.edamam.com/search?q=${cuisine}&app_id=${appId}&app_key=${appKey}&diet=${diet}&to=3`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if(data.hits) {
          setRecipes(data.hits.slice(0, 3));
        }
      } catch (error) {
        console.error('Error fetching data from Edamam:', error);
      }
    };

    fetchData();
  }, [answers.Q1, answers.Q4]);

  return (
    <main className={styles.main}>
      <h1>Quiz Results</h1>
      {recipes.length > 0 ? (
        <div>
          <h2>Top 3 Recommended Dishes For You</h2>
          {recipes.map((hit, index) => (
            <div key={index}>
              <h3>{hit.recipe.label}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading recipes...</p>
      )}
      <div className={styles.buttons}>
        <Button placeholder="Restart Quiz" onClick={onRestart} />
        <Button placeholder="Done" href="/" />
      </div>
    </main>
  );
}

