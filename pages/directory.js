import styles from '@/styles/directory.module.css';
import DishCard from '@/components/DishCard/DishCard';
import DishInventory from '@/data/DishInventory';

export default function directory() {
  <DishCard dish={DishInventory} />
}