import Link from 'next/link';
import styles from './Category.module.css';
import Filter from '../Filter';

export default function Category({ imageURL, description, buttonText, categories, onSelectCategory }) {
  const categoryLink = `/directory?category=${encodeURIComponent(buttonText)}`;

  return (
    <div className={styles.card}>
      {categories && <Filter categories={categories} onSelectCategory={onSelectCategory} />}
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
}
