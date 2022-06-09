import { useParams } from "react-router-dom";
import React, {useEffect, useState } from "react";
import axios from "axios";
function Detail() {
    let { productID } = useParams();
    console.log(productID)
    const [detailProduct,setDetailProduct] = useState([])
    useEffect(()=>{
            axios
              .get(`https://61bc10bcd8542f001782451a.mockapi.io/Products`)
              .then((res) => {
                    setDetailProduct(res.data)
              })
              .catch((error) => console.log(error));
    },[])
     const addItem = (product) => {
       const cart = {
         id_phone: product.id,
         name_phone: product.name_image,
         img: product.image_phone,
         price_phone: product.price_image,
         quanlity: 1,
       };
       setDetailProduct((prev) => {
         const prevState = [cart];
         console.log(prevState);
         const jsonCart = JSON.stringify(prevState);
         localStorage.setItem("cart", jsonCart);
         return prevState;
       });
     };
     return (
       <>
         {detailProduct
           .filter((pro) => pro.id === productID)
           .map((product) => (
             <div>
               <img key={product.id} src={product.image_phone}></img>
               <h3>{product.name_image}</h3>
               <h5>{product.price_image}</h5>
               <button onClick={()=> {addItem(product)}}>Mua ngay</button>
             </div>
           ))}
       </>
     );   
}
export default Detail;