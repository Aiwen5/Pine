import React from "react";
import Button from "../Button";
import RadioButton from "@/components/RadioButton"; 
import styles from "@/styles/Quiz.module.css";

export default function Q1({ selectedOption, onAnswerChange, onNext }) {
  const handleOptionChange = (value) => {
    onAnswerChange('Q1', value);
  };

  return (
    <main className={`${styles.main}`}>
        <div className={styles.quizContainer}>
            <img className={styles.progressBar} src="/ProgressQ1.png" alt="progress bar"></img>
            <h1 className="title">Do You Have Any Dietary Restrictions?</h1>
            <section className={styles.radioButtons}>
                <RadioButton
                    label="N/A"
                    name="dietaryRestrictions"
                    value="everything"
                    checked={selectedOption === "everything"}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="Vegan"
                    name="dietaryRestrictions"
                    value="vegan"
                    checked={selectedOption === "vegan"}
                    onChange={handleOptionChange}
                />

                <RadioButton
                    label="Vegetarian"
                    name="dietaryRestrictions"
                    value="vegetarian"
                    checked={selectedOption === "vegetarian"}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="Gluten free"
                    name="dietaryRestrictions"
                    value="gluten free"
                    checked={selectedOption === "gluten free"}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="Halal"
                    name="dietaryRestrictions"
                    value="halal"
                    checked={selectedOption === "halal"}
                    onChange={handleOptionChange}
                />

                <RadioButton
                    label="Pescetarian"
                    name="dietaryRestrictions"
                    value="Pescetarian"
                    checked={selectedOption === "Pescetarian"}
                    onChange={handleOptionChange}
                />
            </section>
            <div className={styles.buttonContainer}>
                <Button placeholder="Back" href="/" />
                <Button placeholder="Next Question" onClick={onNext} />
            </div>
        </div>
    </main>
  );
}
