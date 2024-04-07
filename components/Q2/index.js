import Button from "../Button";
import styles from "@/styles/Quiz.module.css";

export default function Q2({ selectedOption, onAnswerChange, onNext, onPrev }) {
  const handleOptionChange = (event) => {
    onAnswerChange('Q2', event.target.value);
  };

  return (
    <main className={`${styles.main}`}>
        <h1>What are your health goals?</h1>
        <div className={styles.radioOption}>
            <label className={styles.radioLabel}>
                <input
                type="radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
                />
                Option 1
            </label>
            </div>
            <div className={styles.radioOption}>
            <label className={styles.radioLabel}>
                <input
                type="radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
                />
                Option 2
            </label>
            </div>
            <div className={styles.radioOption}>
            <label className={styles.radioLabel}>
                <input
                type="radio"
                value="option3"
                checked={selectedOption === 'option3'}
                onChange={handleOptionChange}
                />
                Option 3
            </label>
            </div>
            <div className={styles.radioOption}>
            <label className={styles.radioLabel}>
                <input
                type="radio"
                value="option4"
                checked={selectedOption === 'option4'}
                onChange={handleOptionChange}
                />
                Option 4
            </label>
            </div>
        <Button placeholder="Previous Question" onClick={onPrev} />
        <Button placeholder="Next Question" onClick={onNext} />
    </main>
  );
}
