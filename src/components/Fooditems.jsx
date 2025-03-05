import React from "react";
import "../App.css";

const foodData = [
  { name: "Pizza", image: "pizza.png" },
  { name: "Burger", image: "burger.png" },
  { name: "Pasta", image: "pasta.png" },
  { name: "Salad", image: "salad.png" },
  { name: "Manchurian", image: "manc.png" },
  { name: "Ice Cream", image: "ice.png" },
  { name: "Noodles", image: "noodles.png" },
  { name: "Sandwich", image: "sand.png" },
  { name: "Fries", image: "fries.png" },
  { name: "Biryani", image: "biryani.png" },
  { name: "Idli", image: "idli.png" },
  { name: "Dosa", image: "dosa.png" },
];

export default function FoodItems() {
  return (
    <section className="food-container">
      {foodData.map((food, index) => (
        <div key={index} className="food-item">
          <img src={food.image} alt={food.name} className="food-image" />
          <p className="food-name">{food.name}</p>
        </div>
      ))}
    </section>
  );
}
