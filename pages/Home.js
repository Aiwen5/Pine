import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Category from '@/components/Category';
import { useState } from 'react'; 

export default function Home() {
  const data = [
    { 
      imageURL: 'https://www.justonecookbook.com/wp-content/uploads/2023/09/Onigiri-Japanese-Rice-Balls-2053-II.jpg', 
      buttonText: 'Japanese'
    },
    { 
      imageURL: 'https://images.pexels.com/photos/4049145/pexels-photo-4049145.jpeg?cs=srgb&dl=pexels-prasannabaarathi-4049145.jpg&fm=jpg', 
      buttonText: 'Italian'
    }
  ];

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Created by Daniel Der & Evan Schatz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Category 
            imageURL={data[0].imageURL} 
            description={data[0].description} 
            buttonText={data[0].buttonText} 
          />
          <Category 
            imageURL={data[1].imageURL} 
            description={data[1].description} 
            buttonText={data[1].buttonText} 
          />
        </div>
      </main>
    </>
  );
}
