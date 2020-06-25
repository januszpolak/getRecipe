import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";

import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

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
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Welcome to Recipe App</h1>
      <form onSubmit={getSearch} className="input-group">
        <input
          type="text"
          placeholder="What you'd like to find"
          value={search}
          onChange={updateSearch}
          className="form-control"
        />
        <button type="submit" className="btn btn-warning">
          Search recipe ...
        </button>
      </form>
      <div className="wrapper">
        {recipes.map((recipe) => (
          <Recipe
            key={Math.random() * 10000}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
