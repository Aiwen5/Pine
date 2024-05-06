import React from 'react';
import styles from './Filter.module.css';

export default function Filter({ categories, onSelectCategory }) {
  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    onSelectCategory(selectedCategory);
  };

  return (
    <div className={styles.filter}>
      <select onChange={handleChange}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
