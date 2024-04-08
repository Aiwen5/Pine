import styles from './RadioButton.module.css';

export default function RadioButton({ label, name, value, checked, onChange }) {
    return (
      <div className={styles.radioContainer}>
        <input
          id={value}
          type="radio"
          name={name}
          value={value}
          checked={checked === value}
          onChange={onChange}
          className={styles.radioInput}
        />
        <label htmlFor={value} className={styles.radioLabel}>
          <span className={styles.customRadioButton}></span>
          <span className={styles.labelText}>{label}</span>
        </label>
      </div>
    );
  }
  