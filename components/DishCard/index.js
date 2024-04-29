import Link from 'next/link';
import styles from '@/components/DishCard/DishCard.module.css';
import StarRating from '@/components/StarRating';

export default function DishCard({ dish }) {
    if (!dish) return <div>No dishes in this category yet!</div>;

    const dishId = dish.id;

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src={dish.image} alt={dish.name} className={styles.dishImage} />
            </div>
            <div className={styles.cardDetails}>
                <h2 className={styles.title}>{dish.name}</h2>
                <StarRating rating={dish.rating} totalStars={5} />
                <div className={styles.meta}>
                    <div className={styles.categories}>
                        {dish.categories.map((category, index) => (
                            <span key={index} className={styles.category}>{category}</span>
                        ))}
                    </div>
                    <div className={styles.time}>{dish.time} mins</div>
                    <div className={styles.difficulty}>{dish.difficulty}</div>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.findButton}>Find near me</button>
                <Link href={`/description/${dishId}`} passHref>
                    <button className={styles.recipeButton}>Go to recipe</button>
                </Link>
            </div>
        </div>
    );
}
