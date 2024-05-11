import React, { useState } from 'react';
import styles from './Filter.module.css';

export default function Filter({ categories, onSelectCategory }) {
  const [isOpen, setIsOpen] = useState(false); 

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    onSelectCategory(selectedCategory);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className={styles.filter}>
      <img src="/Menu.svg" alt="Menu" className={styles.menuIcon} onClick={toggleDropdown} />

      {isOpen && (
        <select onChange={handleChange} className={styles.dropdown}>
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
