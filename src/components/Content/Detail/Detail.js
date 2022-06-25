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
       alert("Thêm vào giỏ hàng thành công  ")
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
                <h5>{product.price_image}</h5>
                 <div class="box_top_mb">
                   <div class="list_ct">
                     <label for="city">Giá tại</label>
                     <select name="city" id="city" onchange="loadcity(this.value);">
                       <option selected="" value="1">Hà Nội</option>
                       <option value="48">Đà Nẵng</option>
                       <option value="79">TP HCM</option>
                       <option value="92">Cần Thơ</option>
                       <option value="19">Thái Nguyên</option>
                       <option value="31">Hải Phòng</option>
                       <option value="30">Hải Dương</option>
                     </select>
                   </div>
                   <span class="conhang visible-xs ">
                     Còn hàng                        </span>
                   <span class="view_store visible-xs">Xem siêu thị</span>
                 </div>
                 <p class="top_prd ">
                   <span class="_price">
                     23.990.000đ                            </span>
                   <span class="price_old">
                     26.990.000đ                                                </span>

                 </p>
                 <div class="edit-price">
                   <div class="list_same">
                     <a href="https://didongthongminh.vn/iphone-12-pro-max-cu-dep-128gb" class="item_same ">
                       <span class="nick_name">128GB</span>
                       <span class="price_same">22.190.000đ</span>
                     </a>
                     <a href="https://didongthongminh.vn/iphone-12-pro-max-256gb-cu-99-dep-nhu-moi" class="item_same active">
                       <span class="nick_name">256GB</span>
                       <span class="price_same">23.990.000đ</span>
                     </a>
                   </div>
                   
                 </div>
                 <div class="accessories" id="accessories">
                   <h4>Khuyến mại</h4>
                   <ul>
                     <li>Tặng bảo hành toàn diện 6 tháng&nbsp;<a href="https://didongthongminh.vn/bao-hanh-dien-thoai-cu-toan-dien">chi tiết</a></li>
                     <li>Tặng que chọc sim từ thép không gỉ&nbsp;</li>
                     <li>Tặng cable Veger C to Lighning trị giá 150,000vnđ chính hãng&nbsp;</li>
                     <li>Trợ giá sạc nhanh chính hãng Apple giảm 300,000vnđ còn 490,000vnđ</li>
                   </ul>
                 </div>
                 <div class="gift_kem accessories">
                   <h4>Quà tặng kèm</h4>
                   <div class="list_gift">
                     <a href="https://didongthongminh.vn/cable-typec-to-lighting-veger-vp312-1m-den" class="item_gift">
                         <div class="infor_prd">
                           <span>Cáp Sạc Nhanh 1M Veger VP-312 Type C to Lighting</span>
                           <span class="price_gift">Giá: <span>150.000đ</span></span>
                         </div>
                     </a>
                   </div>
                 </div>
                 <div class="accessories">
                   <h4>Bảo hành cơ bản</h4>
                   <ul>
                     <li>Bảo hành 6 tháng tại hệ thống Di Động Thông Minh - <a href="https://didongthongminh.vn/bao-hanh-dien-thoai-cu-toan-dien">chi tiết</a></li>
                     <li>Bảo hành toàn diện&nbsp;cả nguồn, màn hình, vân tay&nbsp;</li>
                     <li>1 đổi 1 trong 30 ngày nếu máy có lỗi từ nhà sản xuất</li>
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