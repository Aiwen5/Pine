import Link from 'next/link';
import styles from '@/components/DishCard/DishCard.module.css';
import StarRating from '@/components/StarRating';

export default function DishCard({ dish }) {
    if (!dish) return <div>No dishes in this category yet!</div>;

    const dishId = dish.id;

    return (
        <Link href={`/description/${dishId}`} passHref legacyBehavior>
            <a className={styles.cardLink}>
                <div className={styles.cardContainer}>
                    <h2 className={styles.title}>{dish.name}</h2>
                    <StarRating rating={dish.rating} totalStars={5} />
                </div>
            </a>
        </Link>
    );
}
