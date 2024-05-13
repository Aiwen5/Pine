import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Category from "@/components/Category";
import Explore from "@/components/Explore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from 'next/router';
import Button from "@/components/Button";

export default function Home() {
  const router = useRouter(); 
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (router.query) {
      const { q4Option } = router.query; 
      if (q4Option) {
        setSelectedOption(q4Option);
      }
      console.log("Selected Option:", q4Option);
    }
  }, [router.query]);

  const handleExploreClick = () => {
    router.push('/quiz'); 
  };

  

const data = [
  {
    imageURL: "https://www.justonecookbook.com/wp-content/uploads/2023/09/Onigiri-Japanese-Rice-Balls-2053-II.jpg",
    description: "Japanese Cuisine",
    buttonText: "Japanese",
    buttonLink: "/japanese-page"
  },
  {
    imageURL: "https://images.pexels.com/photos/4049145/pexels-photo-4049145.jpeg?cs=srgb&dl=pexels-prasannabaarathi-4049145.jpg&fm=jpg",
    description: "Italian Cuisine",
    buttonText: "Italian",
    buttonLink: "/italian-page"
  },
  {
    imageURL: "https://freedesignfile.com/upload/2017/10/Homemade-tasty-tacos-Stock-Photo-06.jpg",
    description: "Mexican Cuisine",
    buttonText: "Mexican",
    buttonLink: "/mexican-page"
  },
  {
    imageURL: "https://spicysouthernkitchen.com/wp-content/uploads/sweet-and-sour-chicken-1.jpg",
    description: "Chinese Cuisine",
    buttonText: "Chinese",
    buttonLink: "/chinese-page"
  },
  {
    imageURL: "https://images.pexels.com/photos/4049145/pexels-photo-4049145.jpeg?cs=srgb&dl=pexels-prasannabaarathi-4049145.jpg&fm=jpg",
    description: "Italian Cuisine", 
    buttonText: "Italian", 
    buttonLink: "/italian-page"
  },
  {
    imageURL: "https://t3.ftcdn.net/jpg/05/70/04/02/360_F_570040265_4xitPhVoc637RBqvEDHCX0BJ1mSpqtgo.jpg",
    description: "Indian Cuisine",
    buttonText: "Indian",
    buttonLink: "/indian-page"
  },
  {
    imageURL: "https://us.123rf.com/450wm/kasia2003/kasia20032305/kasia2003230500362/205272605-4th-of-july-american-independence-day-traditional-picnic-food-american-burger-and-cocktail-american.jpg?ver=6",
    description: "American Cuisine",
    buttonText: "American",
    buttonLink: "/american-page"
  },
  {
    imageURL: "https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?cs=srgb&dl=pexels-christel-heimdal-jensen-628776.jpg&fm=jpg",
    description: "Asian Cuisine",
    buttonText: "Asian",
    buttonLink: "/asian-page"
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
        <title>Pine — Home</title>
        <meta name="description" content="Created by Daniel Der & Evan Schatz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Header />
          <div className={styles.message2}>
            <h1>Good {getGreeting()}</h1>
            <a href='/FAQ'>FAQ</a>
          </div>
          <div className={styles.expcontainer}>
            <h2 className={styles.message}>For You</h2>
            {selectedOption ? (
              <Explore
                imageURL={(data.find(item => item.buttonText === selectedOption) || {}).imageURL}
                description={(data.find(item => item.buttonText === selectedOption) || {}).description}
                buttonText={(data.find(item => item.buttonText === selectedOption) || {}).buttonText}
                buttonLink={(data.find(item => item.buttonText === selectedOption) || {}).buttonLink}
              />
            ) : (
              <Link href="/quiz">
                <Button className={styles.exploreButton} onClick={handleExploreClick} placeholder="Start Quiz"></Button>
              </Link>
            )}
          </div>
          <div className={styles.catcontainer}>
            <h2 className={styles.message}>Explore</h2>
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
          <Footer />
        </div>
      </main>
    </>
  );
}