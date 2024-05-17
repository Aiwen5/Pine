import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LottieAnimation from '@/components/Animation/LottieAnimation';
import animationData from '@/animations/panTree.json';
import styles from '@/components/LoadingScreen/LoadingScreen.module.css';

export default function LoadingScreen({ answers }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const increment = 100 / 150;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment < 100) {
          return prev + increment;
        } else {
          clearInterval(progressInterval);
          return 100;
        }
      });
    }, 30);

    const timeout = setTimeout(() => {
      clearInterval(progressInterval);
      router.push({
        pathname: '/Home',
        query: { q4Option: answers['Q4'] }
      });
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [router, answers]);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.loadingContainer}>
          <h2 className={styles.title} >Customizing your homepage...</h2>
          <LottieAnimation className={styles.lottieContainer} animationData={animationData} height={250} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </main>
    </>
  );
}
