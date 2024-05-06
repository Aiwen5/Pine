import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

export default function RestaurantMap({ dish }) {
    const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 });
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCenter({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
                fetchRestaurants(position.coords.latitude, position.coords.longitude);
            }, (error) => {
                console.error('Geolocation error:', error);
            });
        }
    }, [dish]);

    const fetchRestaurants = async (lat, lng) => {
      try {
          const response = await axios.get(`/api/restaurants`, {
              params: { lat, lng, dish }
          });
          console.log("Restaurants Data:", response.data);
          setRestaurants(response.data);
      } catch (error) {
          console.error('Error fetching restaurants:', error);
      }
    };
  

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY }}
                center={center}
                defaultZoom={14}
            >
                {restaurants.map((restaurant, index) => (
                    <div
                        key={index}
                        lat={restaurant.geometry.location.lat}
                        lng={restaurant.geometry.location.lng}
                        style={{ width: '100px', color: 'black', background: 'white', padding: '10px', borderRadius: '10px' }}
                    >
                        {restaurant.name}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};
