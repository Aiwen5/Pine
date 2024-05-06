import Link from 'next/link';
import styles from '@/components/DishCard/DishCard.module.css';
import StarRating from '@/components/StarRating';
import Image from 'next/image';

export default function DishCard({ dish }) {
    if (!dish) return <div>No dishes in this category yet!</div>;

    const dishId = dish.id;

    return (
        <main className={styles.main}>
            <div className={styles.cardContainer}>
                <div className={styles.imageContainer}>
                    <Image src={dish.image} alt={dish.name} className={styles.dishImage} width={1000} height={1000} />
                </div>
                <div className={styles.cardDetails}>
                    <div className={styles.cardContent}>
                        <h2 className={styles.title}>{dish.name}</h2>
                        <StarRating rating={dish.rating} totalStars={5} />
                        <div className={styles.meta}>
                            <div className={styles.categories}>
                                {dish.categories
                                .filter(category => !category.includes("Difficulty"))
                                .map((category, index) => (
                                <span key={index} className={styles.category}>{category}</span>
                                ))}
                            </div>
                        </div>
                        <div className={styles.timeDifficulty}>
                            <div className={styles.time}>
                                <Image src='./Time.svg' width={15} height={15} alt='Time Icon' />
                                {dish.time} mins
                            </div>
                            <div className={styles.difficulty}>
                                <Image src='./Difficulty.svg' width={15} height={15} alt='Difficulty Icon' />
                                {dish.difficulty}
                            </div>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <Link href={`/map/${dishId}`} passHref>
                            <button className={styles.findButton}>Find near me
                                <Image src='./Location.svg' width={20} height={20} alt='Location Icon'/>
                            </button>
                        </Link>
                        <Link href={`/description/${dishId}`} passHref>
                            <button className={styles.recipeButton}>Go to recipe
                                <Image src='./Arrow.svg' width={20} height={20} alt='arrow'/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
