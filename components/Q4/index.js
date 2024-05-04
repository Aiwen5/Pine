import React from "react";
import Button from "../Button";
import RadioButton from "@/components/RadioButton"; 
import styles from "@/styles/Quiz.module.css";

export default function Q4({ selectedOption, onAnswerChange, onNext, onPrev }) {
  const handleOptionChange = (value) => {
    onAnswerChange('Q4', value);
  };

  return (
    <main className={styles.main}>
        <div className={styles.quizContainer}>
            <img className={styles.progressBar} src="/ProgressQ4.png" alt="progress bar"></img>
            <h1 className="title">What is your favorite type of cuisine?</h1>
            <section className={styles.radioButtons}>
                <RadioButton
                    label="Italian"
                    name="cuisine"
                    value="Italian"
                    checked={selectedOption === "Italian"}
                    onChange={handleOptionChange}
                />
            
                <RadioButton
                    label="Indian"
                    name="cuisine"
                    value="Indian"
                    checked={selectedOption === "Indian"}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="American"
                    name="cuisine"
                    value="American"
                    checked={selectedOption === "American"}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="Asian"
                    name="cuisine"
                    value="Asian"
                    checked={selectedOption === "Asian"}
                    onChange={handleOptionChange}
                />

                <RadioButton
                    label="Mexican"
                    name="cuisine"
                    value="Mexican"
                    checked={selectedOption === "Mexican"}
                    onChange={handleOptionChange}
                />
            </section>
            <div className={styles.buttonContainer}>
                <Button placeholder="Back" onClick={onPrev} />
                <Button placeholder="See Results" onClick={onNext} />
            </div>
        </div>
    </main>
  );
}
