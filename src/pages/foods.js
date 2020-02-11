import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Search from '../components/search'
import Loading from '../components/loading'
import RecipeCard from '../components/recipe-card'
import {
  Row, Col
} from 'reactstrap';

function Foods() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    search("Beef");
  }, []);

  async function search(searchTerm) {
    setLoading(true);

    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchTerm);
    const data = await response.json();
    
    if (!Array.isArray(data.meals) || !data.meals.length) {
        setData(null);
      } else {
        setData(data.meals);
      }

    setLoading(false);
  }

  return(
    <Layout>
        <Search search={search}/>
        {loading ? <Loading /> : 
            <Row>
            {data ? 
              data.map((meal, i) => (
                  <RecipeCard 
                    key={i}
                    id={meal.idMeal}
                    title={meal.strMeal} 
                    area={meal.strArea}
                    category={meal.strCategory} 
                    image={meal.strMealThumb + "/preview"}
                    youtube={meal.strYoutube} />
                )) : 

                <Col xs="12">
                    <p>No meals found</p>
                </Col>
            }
            </Row>
        }
    </Layout>
  );
}

export default Foods;