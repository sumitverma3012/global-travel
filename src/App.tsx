import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";
import SignUp from "./components/Pages/SignUp";

function App() {
  return (
      <>
          <BrowserRouter>
              <Navbar />
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/services" component={Services}/>
                  <Route path="/products" component={Products}/>
                  <Route path="/signup" component={SignUp}/>
              </Switch>
          </BrowserRouter>
      </>
  );
}

export default App;
