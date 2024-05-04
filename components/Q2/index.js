import React from "react";
import Button from "../Button";
import RadioButton from "@/components/RadioButton"; 
import styles from "@/styles/Quiz.module.css";

export default function Q2({ selectedOption, onAnswerChange, onNext, onPrev }) {
  const handleOptionChange = (value) => {
    onAnswerChange('Q2', value);
  };

  return (
    <main className={`${styles.main}`}>
        <div className={styles.quizContainer}>
            <img className={styles.progressBar} src="/ProgressQ2.png" alt="progress bar"></img>
            <h1 className="title">What are your health goals?</h1>
            <section className={styles.radioButtons}>
                <RadioButton
                    label="Just living life"
                    name="healthGoals"
                    value="living life"
                    checked={selectedOption === "living life"}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="Lose weight"
                    name="healthGoals"
                    value="losing weight"
                    checked={selectedOption === "losing weight"}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="Gain muscle"
                    name="healthGoals"
                    value="gaining some muscle"
                    checked={selectedOption === "gaining some muscle"}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="A nice balance"
                    name="healthGoals"
                    value="keeping a nice balance"
                    checked={selectedOption === "keeping a nice balance"}
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
