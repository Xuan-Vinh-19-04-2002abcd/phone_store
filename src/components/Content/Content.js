import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import {Routes, Route,Link} from "react-router-dom";
import Detail from "./Detail/Detail";
function Content() {
  const [listProducts, setListProducts] = useState([]);
  const [listCart,setListCart] = useState([]);
  const [type,setType] = useState('');
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
  const handlerOnchange = (e) =>{
    const val = e.target.value;
    setType(val);
    console.log(type);
  }
  useEffect(()=>{
      getData()
  },[])
  return (
    <>
      <input
        type="text"
        className="search_phone"
        value={type}
        placeholder="Nhập sản phẩm cần tìm kiếm"
        onChange={handlerOnchange}
      />
      <div className="col">
        {type === ""
          ? listProducts.map((product) => (
              <Card
                img={product.image_phone}
                title={product.name_image}
                price={product.price_image}
                saveLocalStorage={() => {
                  addItem(product);
                }}
                URL={`/detail/${product.id}`}
              />
            ))
          : listProducts
              .filter((product) => product.name_image.indexOf(type)!==-1)
              .map((product) => (
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
