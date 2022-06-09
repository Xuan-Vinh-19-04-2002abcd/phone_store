import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import {Routes, Route} from "react-router-dom";
import Detail from "./Detail/Detail";
function Content() {
  const [listProducts, setListProducts] = useState([]);
  const [listCart,setListCart] = useState([])
  const getData = () => {
    axios
      .get(`https://61bc10bcd8542f001782451a.mockapi.io/Products`)
      .then((res) => {
        setListProducts(res.data);
      })
      .catch((error) => console.log(error));
  };
  const addItem = (product) =>{
      const cart = {
        id_phone: product.id,
        name_phone: product.name_image,
        img : product.image_phone,
        price_phone : product.price_image,
        quanlity: 1
      }; 
      setListCart ((prev) =>{
        const prevState = [...prev,cart]
        console.log(prevState);
        const jsonCart = JSON.stringify(prevState)
        localStorage.setItem('cart',jsonCart)
        return prevState
      })
  }
  useEffect(()=>{
      getData()
  },[])
  return (
    <>
      <div className="col">
        {listProducts.map((product) => (
          <Card
            img={product.image_phone}
            title={product.name_image}
            price={product.price_image}
            saveLocalStorage={() => {
              addItem(product);
            }}
            URL={`/detail/${product.id}`}
          />
        ))}
      </div>
      
    </>
  );

  
}
export default Content;
