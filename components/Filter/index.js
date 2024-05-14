import { useState } from 'react';
import styles from './Filter.module.css';
import Image from 'next/image';

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
        <Image
          src="/Filter.svg"
          alt="Menu"
          width={35}
          height={35}
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
