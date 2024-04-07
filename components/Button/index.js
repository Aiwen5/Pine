import styles from "@/components/Button/Button.module.css"

export default function Button({ placeholder, onClick }) {
    return(
        <>
            <button className={styles.button} onClick={onClick}>{placeholder}</button>
        </>
    )
}