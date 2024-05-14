import React, { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Search.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DishInventory from '@/data/DishInventory';
import DishCard from '@/components/DishCard';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function SearchPage() {
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
        <div className={styles.content}>
          <div className={styles.searchbox}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Dishes, Meals, and More"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className={styles.input}
              />
              <Image className={styles.searchIcon} src="/Search.svg" alt="Search" width={50} height={50} />
            </div>
          </div>
          <div className={styles.results}>
            {searchResults.map((result) => (
              <DishCard key={result.id} dish={result} />
            ))}
          </div>
        </div>
        <Footer className={styles.Footer} />
        </div>
      </main>
    </>
  );
}
