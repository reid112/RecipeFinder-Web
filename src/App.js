import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Food from './pages/food'
import Recipe from './pages/recipe'

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Food} />
        <Route path="/food" exact component={Food} />
        {/* <Route path="/drinks" exact component={Drinks} /> */}
        <Route path="/recipe/:id" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;