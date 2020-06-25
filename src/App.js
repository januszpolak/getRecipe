import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";

import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`;

  // Function to fetch data from API
  const getRecipes = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecipes(data.hits));
  };
  // Function updates search in useState
  const updateSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  // Function set our query for example chicken
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <h1>Welcome in Recipe App</h1>
      <form onSubmit={getSearch}>
        <input
          type="text"
          placeholder="What you'd like to find"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit">Search recipe ...</button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
