import React from 'react';
import styles from './RestaurantCard.module.css';
import Button from "../Button";

export default function RestaurantCard({ restaurant }) {
  const defaultImage = 'path_to_default_image_if_any.jpg';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${restaurant.geometry.location.lat},${restaurant.geometry.location.lng}`;

  return (
      <div className={styles.cardContainer}>
          <img
              src={restaurant.photos?.[0]?.photo_reference ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY}` : defaultImage}
              alt={restaurant.name}
              className={styles.image}
          />
          <div className={styles.details}>
              <h2 className={styles.title}>{restaurant.name}</h2>
              <p className={styles.rating}>Rating: {restaurant.rating} ({restaurant.user_ratings_total} reviews)</p>
              <p className={styles.vicinity}>{restaurant.vicinity}</p>
              <p className={`${styles.status} ${restaurant.opening_hours?.open_now ? styles.open : styles.closed}`}>
                  {restaurant.opening_hours?.open_now ? 'Open Now' : 'Closed'}
              </p>
              <Button href={googleMapsUrl} placeholder="Directions" className={styles.directionsButton} target="_blank" rel="noopener noreferrer">Go to Map</Button>
          </div>
      </div>
  );
};
