import React from "react";
import "./Recipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>{Math.floor(calories)} kcal</p>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={Math.random() * 10000}>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
