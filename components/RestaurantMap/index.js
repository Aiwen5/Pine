import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '@/components/RestaurantMap/RestaurantMap.module.css';
import RestaurantCard from '@/components/RestaurantCard';
import LottieAnimation from '@/components/Animation/LottieAnimation';
import animationData from '@/animations/panTree.json';

export default function RestaurantMap({ dishName }) {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                await fetchRestaurants(position.coords.latitude, position.coords.longitude);
            }, console.error);
        }
    }, [dishName]);

    const fetchRestaurants = async (lat, lng) => {
        try {
            const response = await axios.get(`/api/restaurants`, {
                params: { lat, lng, dish: dishName }
            });
            console.log("Restaurants Data:", response.data);
            setRestaurants(response.data);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loadingAnimation}>
                    <LottieAnimation className={styles.lottieContainer} animationData={animationData} height={250} />
                    <p>Loading...</p>
                </div>
            ) : (
                restaurants.map((restaurant, index) => (
                    <RestaurantCard key={index} restaurant={restaurant} />
                ))
            )}
        </div>
    );
};
