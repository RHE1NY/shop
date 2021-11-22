import React, {useEffect, useMemo, useState} from 'react';
import axios from "axios";
import getShop from "../API/getShop";
import './shop.scss';
import Loader from "../Loader/Loader";
import Select from "./Select";
import Basket from "./Basket";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'

const Shop = () => {

    const router = useHistory();
    const [shopItem, setShopItem] = useState([]);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(false)
    const [searchItem, setSearchItem] = useState('');
    const [basketCount, setBasketCount] = useState([]);
    const [sortedItems, setSortedItems] = useState('');
    const [sortedItemsPrice, setSortedItemsPrice] = useState('');
    const dispatch = useDispatch();
    const indexOfLastItem = page * limit;
    const indexOfFirstItem = indexOfLastItem - limit;
    const currencyItem = shopItem.slice(indexOfFirstItem, indexOfLastItem);
    const renderItem = currencyItem.map((shops) => {
        return    <div className={"product-section"}>
                    <div className={"products"}>
                        <div className={"product-image"}>
                            <img src={shops.image}></img>
                        </div>
                        <div className={"products-title"}>
                            <label>{shops.id} <span onClick={() => router.push(`/Shop/${shops.id}`)}>{shops.title}</span>
                            </label>
                        </div>
                        <div className={"product-description"} >
                            <label> {shops.description} </label>
                            <div className={"product-count"}>
                                <label className={"product-price"}>Цена: {shops.price}$</label>
                                <label>  В наличии {shops.rating.count} шт</label>
                            </div>
                            <span onClick={addBasket} className={"addBasket"}>Добавить в корзину</span>
                        </div>
                    </div>
        </div>;
    });
        const result = [];
        for (let i=0; i<Math.ceil(shopItem.length / limit); i++) {
            result.push(i+1);
        }



   async function getItems() {
       setLoader(true);
       const response =  await getShop.getItems();
       setShopItem(response.data)
       setLoader(false);
    }
       const changePage = (page) => {
            setPage(page);
    }

    function addBasket() {
        dispatch({type: "ADD_BASKET", payload: 1})
         return renderItem.map((shops,id) => shops.id === id ? shops.price - 1 : console.log("auen"));
        }

        const sortItems = (sort) => {
            setSortedItems(sort)
            setShopItem([...shopItem].sort((a,b) => a[sort].localeCompare(b[sort])));
        }


    const sortItemsPrice = (sort) => {
        setSortedItemsPrice(sort)
        setShopItem([...shopItem].sort((a,b) => a[sort] < b[sort] ? 1 : -1));
    }

    const searchedItems = useMemo(()  => {
        if (searchItem) {
            return setShopItem(shopItem.filter(shop => shop.title.toLowerCase().includes(searchItem)));
        }
            return renderItem;
    }, [searchItem]);



    useEffect(() => {
        getItems()
    }, [page])

    return (
        <div>
          <div className={"basket"}>
              <Basket
              basketCount={basketCount}

              />
          </div>
           <Select
               value={sortedItems}
               onChange={sortItems}
               defaultValue={"Сортировка"}
                   options={[
                       {value: 'title', name: 'По названию'},
                   ]}
           />
           <Select
           value={sortedItemsPrice}
           defaultValue={"Сортировка"}
           onChange={sortItemsPrice}
           options={[
               {value: 'price', name: 'По цене'},
           ]}
           />
            <span>Поиск товаров</span>
             <input type="text"
                    value={searchItem}
                    onChange={e => setSearchItem(e.target.value)}
                    placeholder={"Введите значение"}
             />
            <div>{loader
                ? <div><Loader/></div>
                 :
                renderItem || searchedItems}</div>
            <div className={"pagination"}>
            {result.map (pages =>
            <button className={page === pages ? "pageBtn pageBtn_active" : "pageBtn"}
                onClick={()=> changePage(pages)}
            >{pages}</button>
            )}</div>
        </div>

    );
};

export default Shop;