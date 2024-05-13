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
            onChange={handleChange}
            onBlur={closeDropdown}
            className={styles.dropdown}
            size={categories.length + 1} 
          >
            <option value="">All Categories</option>
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
