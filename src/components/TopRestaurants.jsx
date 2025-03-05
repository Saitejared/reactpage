import React from "react";
import "../App.css";

const restaurants = [
  { name: "Mafial", image: "mahfil.png", rating: "4.5", cuisine: "Hyderabadi, Mughlai", description: "Famous for its rich flavors and authentic dishes." },
  { name: "Kritunga", image: "kritunga.png", rating: "4.6", cuisine: "Andhra, Spicy", description: "A paradise for spice lovers, serving fiery Andhra cuisine." },
  { name: "Tulips", image: "tulips.png", rating: "4.3", cuisine: "Multi-Cuisine", description: "Offers a variety of dishes from different cuisines." },
  { name: "Hotel Shadab", image: "shadab.png", rating: "4.4", cuisine: "Hyderabadi, Biryani", description: "A go-to spot for authentic Hyderabadi biryani." },
  { name: "Bawarchi", image: "baw.png", rating: "4.2", cuisine: "Biryani, North Indian", description: "One of the best places for classic biryani lovers." },
  { name: "Pista House", image: "pista.png", rating: "4.5", cuisine: "Bakery, Hyderabadi", description: "Famous for its mouth-watering Haleem and sweets." },
  { name: "Ohri’s Serengeti", image: "ohris.png", rating: "4.3", cuisine: "Continental, North Indian", description: "Enjoy dining in a jungle-themed restaurant." },
  { name: "AB’s - Absolute Barbecue", image: "ab.png", rating: "4.7", cuisine: "BBQ, Grilled", description: "A must-visit place for barbecue and grilled lovers." },
];

export default function TopRestaurants() {
  return (
    <section className="restaurant-container">
      <h2>Top Restaurants in Hyderabad</h2>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <div className="image-container">
              <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
              <span className="rating">⭐ {restaurant.rating}</span>
            </div>
            <div className="restaurant-info">
              <h3>{restaurant.name}</h3>
              <p className="cuisine">{restaurant.cuisine}</p>
              <p className="description">{restaurant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
