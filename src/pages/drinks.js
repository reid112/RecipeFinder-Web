import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Search from '../components/search'
import Loading from '../components/loading'
import RecipeCard from '../components/recipe-card'
import {
  Row, Col
} from 'reactstrap';

function Drinks() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    search("Gin");
  }, []);

  async function search(searchTerm) {
    setLoading(true);

    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchTerm);
    const data = await response.json();
    
    if (!Array.isArray(data.drinks) || !data.drinks.length) {
        setData(null);
      } else {
        setData(data.drinks);
      }

    setLoading(false);
  }

  return(
    <Layout>
        <Search search={search}/>
        {loading ? <Loading /> : 
            <Row>
            {data ? 
              data.map((drink, i) => (
                  <RecipeCard 
                    key={i}
                    id={drink.idDrink}
                    title={drink.strDrink} 
                    area=""
                    category=""
                    image={drink.strDrinkThumb + "/preview"}
                    youtube="" />
                )) : 

                <Col xs="12">
                    <p>No drinks found</p>
                </Col>
            }
            </Row>
        }
    </Layout>
  );
}

export default Drinks;