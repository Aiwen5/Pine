import Button from "../Button";
import RadioButton from "@/components/RadioButton"; 
import styles from "@/styles/Quiz.module.css";

export default function Q1({ selectedOption, onAnswerChange, onNext }) {
  const handleOptionChange = (event) => {
    onAnswerChange('Q1', event.target.value);
  };

  return (
    <main className={`${styles.main}`}>
        <h1 className="title">Do You Have Any Dietary Restrictions?</h1>
        
        <RadioButton
            label="N/A"
            name="dietaryRestrictions"
            value="N/A"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <RadioButton
            label="Vegan"
            name="dietaryRestrictions"
            value="Vegan"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <RadioButton
            label="Gluten free"
            name="dietaryRestrictions"
            value="Gluten free"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <RadioButton
            label="Halal"
            name="dietaryRestrictions"
            value="Halal"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        <Button placeholder="Back" href="/" />
        <Button placeholder="Next Question" onClick={onNext} />
    </main>
  );
}

  