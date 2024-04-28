import styles from '@/components/DishCard/DishCard.module.css';

export default function DishCard({ dish }) {
    return (
        <div className={styles.Feature}>
            <div className={styles.Rectangle4} />
            <div className={styles.FeaturedDish}>Featured Dish</div>
            <img className={styles.Rectangle5} src={dish.image} alt={dish.name} />
            <div className={styles.Stars}></div>
            <div className={styles.Mins}>{dish.time} mins</div>
            <div className={styles.Vector} />
            <div className={styles.Easy}>{dish.difficulty}</div>
            <div className={styles.Vector} />
            <div className={styles.SmallButtonArrow}>
                <div className={styles.Rectangle3} />
                <div className={styles.GoToRecipe}>Go to recipe</div>
                <div className={styles.Arrow}>
                    <div className={styles.Vector} />
                </div>
            </div>
            <div className={styles.LocationButton}>
                <div className={styles.Rectangle3} />
                <div className={styles.FindNearMe}>Find near me</div>
                <div className={styles.Location}>
                    <div className={styles.Vector} />
                    <div className={styles.Vector} />
                </div>
            </div>
            {dish.categories.map((category, index) => (
                <div key={index} className={styles.Category}>
                    <div className={styles.Rectangle15} />
                    <div className={styles.CategoryText}>{category}</div>
                </div>
            ))}
        </div>
    );
}
