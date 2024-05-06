import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Search.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DishInventory from "@/data/DishInventory";
import Category from "@/components/Category"; 
import { useRouter } from "next/router";
import DishDescription from "./description/[id]";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredResults = DishInventory.filter((dish) =>
      dish.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleClick = (dishId) => {
    router.push(`/description/${dishId}`);
  };

  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Created by Daniel Der & Evan Schatz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Header />
          <div className={styles.searchbox}>
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.results}>
            {searchResults.map((result) => (
              <Category
              key={result.id}
              imageURL={result.image}
              description={result.description}
              buttonText={result.name}
              onClick={() => handleClick(result.id)}
            />
            ))}
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
