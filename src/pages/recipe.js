import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Loading from '../components/loading'
import {
  Container, Row
} from 'reactstrap';
import {
    useParams
  } from "react-router-dom";

function Food() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
      const data = await response.json();

      if (!Array.isArray(data.meals) || !data.meals.length) {
        setData({});
      } else {
        setData(data.meals[0]);
      }
      
      setLoading(false);
    }

    fetchData();
  }, []);

  return(
    <Layout>
        {loading ? <Loading /> : 
            <p>Meal: {data.strMeal}</p>
        }
    </Layout>
  );
}

export default Food;