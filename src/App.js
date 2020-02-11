import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Foods from './pages/foods'
import Food from './pages/food'
import Drinks from './pages/drinks'
import Drink from './pages/drink'

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Food} />
        <Route path="/foods" exact component={Foods} />
        <Route path="/food/:id" component={Food} />
        <Route path="/drinks" exact component={Drinks} />
        <Route path="/drink/:id" component={Drink} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;