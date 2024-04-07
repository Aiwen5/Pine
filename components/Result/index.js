import React from 'react';
import Button from '../Button';
import styles from "@/components/Result/Result.module.css";

export default function Result({ answers, onRestart }) {
  return (
    <div>
      <h1>Quiz Results</h1>
      <p>Based on your results, it seems like:</p>
      <ul>
        <li>You have dietary restrictions: {answers.Q1}</li>
        <li>Your health goal is: {answers.Q2}</li>
        <li>Your cooking skill level is: {answers.Q3}</li>
        <li>Your favorite kind of cuisine is: {answers.Q4}</li>
      </ul>
      <Button placeholder="Restart Quiz" onClick={onRestart} />
      {/* <Button placeholder="Restart Quiz" onClick={} /> */}

    </div>
  );
}
