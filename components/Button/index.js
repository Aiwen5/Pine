import styles from "@/components/Button/Button.module.css"

export default function Button({placeholder}) {
    return(
        <>
            <button className={styles.button}>{placeholder}</button>
        </>
    )
}