import Button from "../Button";
import RadioButton from "@/components/RadioButton"; 
import styles from "@/styles/Quiz.module.css";

export default function Q4({ selectedOption, onAnswerChange, onNext, onPrev }) {
  const handleOptionChange = (event) => {
    onAnswerChange('Q4', event.target.value);
  };

  return (
    <main className={`${styles.main}`}>
        <h1 className="title">What is your favorite type of cuisine?</h1>
      
        <RadioButton
            label="Italian"
            name="cuisine"
            value="Italian Cuisine"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
      
        <RadioButton
            label="Indian"
            name="cuisine"
            value="Indian Cuisine"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <RadioButton
            label="American"
            name="cuisine"
            value="American Cuisine"
            checked={selectedOption}
            onChange={handleOptionChange}
        />
        
        <RadioButton
            label="Asian"
            name="cuisine"
            value="Asian Cuisine"
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
        
        <Button placeholder="Back" onClick={onPrev} />
        <Button placeholder="See Results" onClick={onNext} />
    </main>
  );
}
