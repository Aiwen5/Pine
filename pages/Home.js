import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Category from '@/components/Category';
import Explore from '@/components/Explore';

export default function Home() {
  const data = [
    { 
      imageURL: 'https://www.justonecookbook.com/wp-content/uploads/2023/09/Onigiri-Japanese-Rice-Balls-2053-II.jpg', 
      buttonText: 'Japanese'
    },
    { 
      imageURL: 'https://images.pexels.com/photos/4049145/pexels-photo-4049145.jpeg?cs=srgb&dl=pexels-prasannabaarathi-4049145.jpg&fm=jpg', 
      buttonText: 'Italian'
    },
    { 
      imageURL: 'https://freedesignfile.com/upload/2017/10/Homemade-tasty-tacos-Stock-Photo-06.jpg', 
      buttonText: 'Mexican'
    },
    { 
      imageURL: 'https://spicysouthernkitchen.com/wp-content/uploads/sweet-and-sour-chicken-1.jpg', 
      buttonText: 'Chinese'
    },
  ];

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Morning";
    } else if (hour < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  }

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
          <div className={styles.expcontainer}>
          <p className={styles.message2}>Good {getGreeting()}</p>
            <p className={styles.message}>For You</p>
            <Explore 
              imageURL={data[2].imageURL} 
              description={data[2].description} 
              buttonText={data[2].buttonText} 
            />
          </div>
          <div className={styles.catcontainer}>
            <p className={styles.message}>Explore</p>
            <p> </p>
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
            <Category 
              imageURL={data[2].imageURL} 
              description={data[2].description} 
              buttonText={data[2].buttonText} 
            />
            <Category 
              imageURL={data[3].imageURL} 
              description={data[3].description} 
              buttonText={data[3].buttonText} 
            />
          </div>
        </div>
      </main>
    </>
  );
}
