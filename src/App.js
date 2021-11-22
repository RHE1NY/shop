import React, {useEffect, useState} from 'react'
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import Shop from "./components/pageshop/Shop";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/pageshop/About";
import {Routes} from "react-router";
import Redirect from "react-router-dom/es/Redirect";
import AppRouter from "./components/AppRouter/AppRouter";



function App() {



  return (
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
</BrowserRouter>
  );
}

export default App;