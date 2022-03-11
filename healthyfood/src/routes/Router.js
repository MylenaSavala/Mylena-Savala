import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/Home.js';
import Register from "../pages/Register";

export const Router = () => {
  return (

    <BrowserRouter>
    <Switch>
      <Route exact path ={"/"} >
      <Home />
      </Route>
      <Route exact path={"/Register"}>
      <Register />       
      </Route>
    </Switch>
  </BrowserRouter>
  );
}





