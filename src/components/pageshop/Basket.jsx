import React from 'react';
import {useSelector} from "react-redux";
import {basketReducer} from "../../store/basketReducer";

const Basket = () => {

    const basket = useSelector(state => state.basket.basket)
    return (
        <div>
            <img src="logo.jpg" width="50px"></img>
            {basket.length}
        </div>
    );
};

export default Basket;
