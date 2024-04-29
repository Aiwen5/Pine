import styles from '@/components/StarRating/StarRating.module.css';

export default function Star({ isFilled }) {
  return(
    <span className={`${styles.star} ${isFilled ? styles.filled : ''}`}>
      {isFilled ? '★' : '☆'}
    </span>
  );
}
