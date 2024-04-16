import Button from "../Button";
import RadioButton from "@/components/RadioButton"; 
import styles from "@/styles/Quiz.module.css";

export default function Q4({ selectedOption, onAnswerChange, onNext, onPrev }) {
  const handleOptionChange = (event) => {
    onAnswerChange('Q4', event.target.value);
  };

  return (
    <main className={`${styles.main}`}>
        <div className={styles.quizContainer}>
            <img className={styles.progressBar} src="/ProgressQ4.png" alt="progress bar"></img>
            <h1 className="title">What is your favorite type of cuisine?</h1>
            <section className={styles.radioButtons}>
                <RadioButton
                    label="Italian"
                    name="cuisine"
                    value="Italian"
                    checked={selectedOption}
                    onChange={handleOptionChange}
                />
            
                <RadioButton
                    label="Indian"
                    name="cuisine"
                    value="Indian"
                    checked={selectedOption}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="American"
                    name="cuisine"
                    value="American"
                    checked={selectedOption}
                    onChange={handleOptionChange}
                />
                
                <RadioButton
                    label="Asian"
                    name="cuisine"
                    value="Asian"
                    checked={selectedOption}
                    onChange={handleOptionChange}
                />

                <RadioButton
                    label="Mexican"
                    name="cuisine"
                    value="Mexican"
                    checked={selectedOption}
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
