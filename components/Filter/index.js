import React, { useState } from 'react';
import styles from './Filter.module.css';

export default function Filter({ categories, onSelectCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    const selectedCategories = Array.from(event.target.selectedOptions, (option) => option.value);
    onSelectCategory(selectedCategories);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.dropdownContainer}>
        <img
          src="/Menu.svg"
          alt="Menu"
          className={styles.menuIcon}
          onClick={toggleDropdown}
        />
        {isOpen && (
          <select
            multiple
            onChange={handleChange}
            onBlur={closeDropdown}
            className={styles.dropdown}
            size={categories.length + 1} 
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
