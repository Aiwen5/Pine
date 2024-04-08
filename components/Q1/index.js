import Button from "../Button";
import RadioButton from "@/components/RadioButton"; 
import styles from "@/styles/Quiz.module.css";

export default function Q1({ selectedOption, onAnswerChange, onNext }) {
  const handleOptionChange = (event) => {
    onAnswerChange('Q1', event.target.value);
  };

  return (
    <main className={`${styles.main}`}>
        <img className={styles.progressBar} src="/ProgressQ1.png" alt="progress bar"></img>
        <h1 className="title">Do You Have Any Dietary Restrictions?</h1>
        <section className={styles.radioButtons}>
            <RadioButton
                label="N/A"
                name="dietaryRestrictions"
                value="everything"
                checked={selectedOption}
                onChange={handleOptionChange}
            />
            
            <RadioButton
                label="Vegan"
                name="dietaryRestrictions"
                value="vegan food"
                checked={selectedOption}
                onChange={handleOptionChange}
            />
            
            <RadioButton
                label="Gluten free"
                name="dietaryRestrictions"
                value="gluten free"
                checked={selectedOption}
                onChange={handleOptionChange}
            />
            
            <RadioButton
                label="Halal"
                name="dietaryRestrictions"
                value="halal food"
                checked={selectedOption}
                onChange={handleOptionChange}
            />
        </section>
        <div className={styles.buttonContainer}>
            <Button placeholder="Back" href="/" />
            <Button placeholder="Next Question" onClick={onNext} />
        </div>    
    </main>
  );
}

  