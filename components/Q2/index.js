import Button from "../Button";
import RadioButton from "@/components/RadioButton"; 
import styles from "@/styles/Quiz.module.css";

export default function Q2({ selectedOption, onAnswerChange, onNext, onPrev }) {
  const handleOptionChange = (event) => {
    onAnswerChange('Q2', event.target.value);
  };

  return (
    <main className={`${styles.main}`}>
        <h1 className="title">What are your health goals?</h1>
        
        <RadioButton
            label="Just living life"
            name="healthGoals"
            value="Just living life"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <RadioButton
            label="Lose weight"
            name="healthGoals"
            value="Lose weight"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <RadioButton
            label="Gain muscle"
            name="healthGoals"
            value="Gain muscle"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <RadioButton
            label="A nice balance"
            name="healthGoals"
            value="A nice balance"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <Button placeholder="Back" onClick={onPrev} />
        <Button placeholder="Next" onClick={onNext} />
    </main>
  );
}
