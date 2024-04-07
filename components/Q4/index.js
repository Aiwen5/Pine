import Button from "../Button";
import styles from "@/styles/Quiz.module.css";

export default function Q4({ selectedOption, onAnswerChange, onNext, onPrev }) {
  const handleOptionChange = (event) => {
    onAnswerChange('Q4', event.target.value);
  };

  return (
    <main className={`${styles.main}`}>
      <h1>What is your favorite type of cuisine?</h1>
      <div className={styles.radioOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="Italian Cuisine"
              checked={selectedOption === 'Italian Cuisine'}
              onChange={handleOptionChange}
            />
            Italian
          </label>
        </div>
        <div className={styles.radioOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="Indian Cuisine"
              checked={selectedOption === 'Indian Cuisine'}
              onChange={handleOptionChange}
            />
            Indian
          </label>
        </div>
        <div className={styles.radioOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="American Cuisine"
              checked={selectedOption === 'American Cuisine'}
              onChange={handleOptionChange}
            />
            American
          </label>
        </div>
        <div className={styles.radioOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="Asian Cuisine"
              checked={selectedOption === 'Asian Cuisine'}
              onChange={handleOptionChange}
            />
            Asian
          </label>
        </div>
      <Button placeholder="Previous Question" onClick={onPrev} />
      <Button placeholder="See Results" onClick={onNext} />
    </main>
  );
}


