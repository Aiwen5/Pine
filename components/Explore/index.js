import React from 'react';
import Link from 'next/link';
import styles from './Explore.module.css'; 

export default function Explore({ imageURL, description, buttonText, imageSize }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageURL} alt="Category Image" style={imageSize} />
      <div className="card-body">
        <div className={styles.description}>
          <h5 className="card-title">{description}</h5>
        </div>
        <Link href="/quiz">
        <button className={`btn btn-primary ${styles.button}`}>{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};  
