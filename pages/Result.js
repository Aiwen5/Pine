import Head from 'next/head';
import styles from '@/styles/Result.module.css'; 
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

export default function Result() {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');

    useEffect(() => {
        // Retrieve selected option from sessionStorage after component mount
        const option1 = sessionStorage.getItem('selectedOption1');
        if (option1) {
            setSelectedOption1(option1);
        }
    }, []); // Run only once after mount

    useEffect(() => {
        // Retrieve selected option from sessionStorage after component mount
        const option2 = sessionStorage.getItem('selectedOption2');
        if (option2) {
            setSelectedOption2(option2);
        }
    }, []); // Run only once after mount

    useEffect(() => {
        // Retrieve selected option from sessionStorage after component mount
        const option3 = sessionStorage.getItem('selectedOption3');
        if (option3) {
            setSelectedOption3(option3);
        }
    }, []); // Run only once after mount

    const router = useRouter();
    const { selectedOption4 } = router.query;

    return (
        <>
            <Head>
                <title>Quiz</title>
                <meta name="description" content="Created by Daniel Der & Evan Schatz" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
                <p>Based Off Your Results it seems like you are {selectedOption1},
                    with a goal to {selectedOption2},
                    with a skill level of {selectedOption3},
                    who enjoys {selectedOption4}</p>
                <div className={styles.buttonContainer}>
                    <Link href="/Diet">
                        <Button placeholder="Retake Quiz" />
                    </Link>
                    <Link href="/Home">
                        <Button placeholder="Done" />
                    </Link>
                </div>
            </main>
        </>
    );
}
