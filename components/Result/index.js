import Button from '../Button';
import styles from "@/components/Result/Result.module.css";

export default function Result({ answers, onRestart }) {
  return (
    <main className={styles.main}>
      <h1>Quiz Results</h1>
      <section className={styles.resultsSection}>
            <h2>Based on your answers,<br></br>it seems like:</h2>
            <div className={styles.results}>
                <p>You eat {answers.Q1}</p>
                <p>You have a goal of {answers.Q2}</p>
                <p>You really {answers.Q3}</p>
                <p>You love your {answers.Q4}</p>
            </div>
      </section>
      <div className={styles.buttons}>
        <Button placeholder="Restart Quiz" onClick={onRestart} />
        <Button placeholder="Done" href="/" />
      </div>
    </main>
  );
}
