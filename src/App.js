import React, { useState, useEffect } from 'react'
import Header from './components/header'
import Loading from './components/loading'
import RecipeCard from './components/recipe-card'
import {
  Container, Row
} from 'reactstrap';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken");
      const data = await response.json();
      setData(data.meals);
      setLoading(false);
    }

    fetchData();
  }, []);

  return(
    <div>
      <Header />
      
      <Container>
        {loading ? <Loading /> : 
            <Row>
              {data.map((meal, i) => (
                  <RecipeCard 
                    key={i}
                    id={meal.idMeal}
                    title={meal.strMeal} 
                    area={meal.strArea}
                    category={meal.strCategory} 
                    image={meal.strMealThumb}
                    youtube={meal.strYoutube} />
                ))}
            </Row>
        }
      </Container>
    </div>
  );
}

export default App;