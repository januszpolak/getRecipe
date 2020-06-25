import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{Math.floor(calories)} kcal</p>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={Math.random() * 100}>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
