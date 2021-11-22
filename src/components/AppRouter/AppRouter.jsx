import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "../pageshop/About";
import Shop from "../pageshop/Shop";
import Redirect from "react-router-dom/es/Redirect";
import ShopItemPage from "../pageshop/ShopItemPage";
import Navbar from "../navbar/Navbar";


const AppRouter = () => {
    return (
        <Switch>
            <Route path="/About">
                <About/>
            </Route>

            <Route exact path="/Shop">
                <Shop/>
            </Route>
            <Route exact path="/Shop/:id">
                <ShopItemPage/>
            </Route>
            <Redirect to="/Shop"></Redirect>
        </Switch>
    );
};

export default AppRouter;