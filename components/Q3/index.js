import Button from "../Button";
import RadioButton from "@/components/RadioButton"; 
import styles from "@/styles/Quiz.module.css";

export default function Q3({ selectedOption, onAnswerChange, onNext, onPrev }) {
  const handleOptionChange = (event) => {
    onAnswerChange('Q3', event.target.value);
  };

  return (
    <main className={`${styles.main}`}>
        <h1 className="title">How would you rate your cooking skills?</h1>
      
        <RadioButton
            label="I can boil pasta"
            name="cookingSkills"
            value="I can boil pasta"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <RadioButton
            label="I make a mean omlette"
            name="cookingSkills"
            value="I make a mean omlette"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <RadioButton
            label="I'm a home cook"
            name="cookingSkills"
            value="I'm a home cook"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <RadioButton
            label="I could go pro!"
            name="cookingSkills"
            value="I could go pro!"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <Button placeholder="Back" onClick={onPrev} />
        <Button placeholder="Next" onClick={onNext} />
    </main>
  );
}
