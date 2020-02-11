import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Loading from '../components/loading'
import {
    useParams
  } from "react-router-dom";

function Drink() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
      const data = await response.json();

      if (!Array.isArray(data.drinks) || !data.drinks.length) {
        setData({});
      } else {
        setData(data.drinks[0]);
      }
      
      setLoading(false);
    }

    fetchData();
  }, [id]);

  return(
    <Layout>
        {loading ? <Loading /> : 
            <p>Drink: {data.strDrink}</p>
        }
    </Layout>
  );
}

export default Drink;