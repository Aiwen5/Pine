import Button from "../Button";
import RadioButton from "@/components/RadioButton"; 
import styles from "@/styles/Quiz.module.css";

export default function Q2({ selectedOption, onAnswerChange, onNext, onPrev }) {
  const handleOptionChange = (event) => {
    onAnswerChange('Q2', event.target.value);
  };

  return (
    <main className={`${styles.main}`}>
        <img className={styles.progressBar} src="/ProgressQ2.png" alt="progress bar"></img>
        <h1 className="title">What are your health goals?</h1>
        <section className={styles.radioButtons}>
            <RadioButton
                label="Just living life"
                name="healthGoals"
                value="living life"
                checked={selectedOption}
                onChange={handleOptionChange}
            />
            
            <RadioButton
                label="Lose weight"
                name="healthGoals"
                value="losing weight"
                checked={selectedOption}
                onChange={handleOptionChange}
            />
            
            <RadioButton
                label="Gain muscle"
                name="healthGoals"
                value="gaining some muscle"
                checked={selectedOption}
                onChange={handleOptionChange}
            />
            
            <RadioButton
                label="A nice balance"
                name="healthGoals"
                value="keeping a nice balance"
                checked={selectedOption}
                onChange={handleOptionChange}
            />
        </section>
        <div className={styles.buttonContainer}>
            <Button placeholder="Back" onClick={onPrev} />
            <Button placeholder="Next" onClick={onNext} />
        </div>
    </main>
  );
}
