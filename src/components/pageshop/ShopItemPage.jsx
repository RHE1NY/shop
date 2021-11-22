import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import getShop from "../API/getShop";
import './shop.scss'

const ShopItemPage = () => {
    const params = useParams();
    const [shopPage, setShopPage] = useState({});
    async function getItem(id) {
        const response =  await getShop.getItemPage(id);
        setShopPage(response.data);
    }

    useEffect(() => {
        getItem(params.id);
    }, [])
    return (
        <div className={"shop-Item-Page"}>
            <img src={shopPage.image}></img>
            <label  className={"shop-Item-Title"}>{shopPage.title}</label> <br/><label className={"shop-Item-Description"}>{shopPage.description}</label>
          <br/>  <label  className={"shop-Item-Price"}>Цена {shopPage.price}</label>
        </div>
    );
};

export default ShopItemPage;