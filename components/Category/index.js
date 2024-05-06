import Link from 'next/link';
import styles from './Category.module.css'; 

export default function Category({ imageURL, description, buttonText }) {
  const categoryLink = `/directory?category=${encodeURIComponent(buttonText)}`;

  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageURL} alt="Category Image" />
      <div className="card-body">
        <div className={styles.description}>
          <h5 className="card-title">{description}</h5>
        </div>
        <Link href={categoryLink} passHref>
          <button className={`btn btn-primary ${styles.button}`}>{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};
