import { useParams } from "react-router-dom";
import React, {useEffect, useState } from "react";
import axios from "axios";
import "./Detail.css"
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
             <div className="detail">
               <img key={product.id} src={product.image_phone}></img>
               <div className="detail-content">
                <h3>{product.name_image}</h3>
                 <div class="box_top_mb">   
                   <span class="conhang visible-xs ">
                     Còn hàng </span> 
                 </div>
                 <p class="top_prd ">
                   <span class="_price">
                     <b>{product.price_image} VNĐ</b></span>
                 </p>
                 <div class="accessories">
                   <h4>Khuyến mại</h4>
                   <ul>
                     <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                       <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                       <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                     </svg> Tặng bảo hành toàn diện 6 tháng&nbsp;<a href="https://didongthongminh.vn/bao-hanh-dien-thoai-cu-toan-dien">chi tiết</a></li>
                     <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                       <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                       <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                     </svg> Tặng que chọc sim từ thép không gỉ&nbsp;</li>
                     <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                       <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                       <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                     </svg> Tặng cable Veger C to Lighning trị giá 150,000vnđ chính hãng&nbsp;</li>
                     <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                       <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                       <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                     </svg> Trợ giá sạc nhanh chính hãng Apple giảm 300,000 VNĐ còn 490,000 VNĐ</li>
                   </ul>
                 </div>
                 <div class="accessories">
                   <h4>Bảo hành cơ bản</h4>
                   <ul>
                     <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                       <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                       <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                     </svg>  Bảo hành 6 tháng tại hệ thống Di Động Thông Minh - <a href="https://didongthongminh.vn/bao-hanh-dien-thoai-cu-toan-dien">chi tiết</a></li>
                     <li>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                         <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                         <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                       </svg> Bảo hành toàn diện&nbsp;cả nguồn, màn hình, vân tay&nbsp;</li>
                     <li>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                         <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                         <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                       </svg> 1 đổi 1 trong 30 ngày nếu máy có lỗi từ nhà sản xuất</li>
                   </ul>
                 </div>
                <button class="buy-btn" onClick={() => { addItem(product) }}>Mua ngay</button>
               </div>
              
             </div>
           ))}
       </>
     );   
}
export default Detail;