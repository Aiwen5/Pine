import React from "react";
import Button from "../Button";
import RadioButton from "@/components/RadioButton"; 
import styles from "@/styles/Quiz.module.css";

export default function Q3({ selectedOption, onAnswerChange, onNext, onPrev }) {
  const handleOptionChange = (value) => {
    onAnswerChange('Q3', value);
  };

  return (
    <main className={`${styles.main}`}>
        <div className={styles.quizContainer}>
            <img className={styles.progressBar} src="/ProgressQ3.png" alt="progress bar"></img>
            <h1 className="title">How would you rate your cooking skills?</h1>
            <section className={styles.radioButtons}>
                <RadioButton
                    label="I can boil pasta"
                    name="cookingSkills"
                    value="boil pasta"
                    checked={selectedOption === "boil pasta"}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="I make a mean omlette"
                    name="cookingSkills"
                    value="make a mean omlette"
                    checked={selectedOption === "make a mean omlette"}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="I'm a home cook"
                    name="cookingSkills"
                    value="cook!"
                    checked={selectedOption === "cook!"}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="I could go pro!"
                    name="cookingSkills"
                    value="could go pro!"
                    checked={selectedOption === "could go pro!"}
                    onChange={handleOptionChange}
                />
            </section>
            <div className={styles.buttonContainer}>
                <Button placeholder="Back" onClick={onPrev} />
                <Button placeholder="Next" onClick={onNext} />
            </div>
        </div>
    </main>
  );
}
