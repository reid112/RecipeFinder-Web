import React from 'react'
import RecipeCard from './components/recipe-card'

function App() {
  return(
    <div>
      <h2>Recipies will be shown here</h2>
      <RecipeCard title="Recipe 1"/>
      <RecipeCard title="Recipe 2"/>
      <RecipeCard title="Recipe 3"/>
      <RecipeCard title="Recipe 4"/>
      <RecipeCard title="Recipe 5"/>
    </div>
  );
}

export default App;