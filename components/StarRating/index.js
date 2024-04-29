import styles from '@/components/StarRating/StarRating.module.css'
import DishInventory from '@/data/DishInventory'
import Star from '../Star'

export default function StarRating({ rating, totalStars = 5 }) {
  return(
    <div>
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} isFilled={index < rating} />
      ))}
    </div>
  )
}