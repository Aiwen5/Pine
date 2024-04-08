import { useRouter } from 'next/router';
import styles from "@/components/Button/Button.module.css";

export default function Button({ placeholder, onClick, href }) {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button className={styles.button} onClick={handleClick}>
            {placeholder}
        </button>
    );
}
