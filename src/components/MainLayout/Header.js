import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="menu-one">
            <div className="menu-header-logo">
              <div className="header-logo">
                <img src="https://i.imgur.com/wTQSAZ8.png" alt="" />
              </div>
            </div>
            <div className="search-box">
              <input
                type="text"
                className="search-input"
                placeholder="Search.."
              />
              <button className="search-button">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </div>
            <div className="menu-header-item">
              <div className="buy flex_icon">
                <i className="fa fa-phone" aria-hidden="true" />
                <span> Gọi mua hàng</span>
              </div>
              <div className="address flex_icon">
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span> Tìm cửa hàng gần bạn</span>
              </div>
              <div className="cart flex_icon">
                <Link to='/cart' className='cart_product' >
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                  <span> Giỏ hàng</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="menu-bottom">
            <ul>
              <li>
                <i className="fa fa-mobile" aria-hidden="true" />
                <span> Điện thoại</span>
              </li>
              <li>
                <i className="fa fa-laptop" aria-hidden="true" />
                <span> Máy tính bảng</span>
              </li>
              <li>
                <i className="fa fa-laptop" aria-hidden="true" />
                <span> Laptop</span>
              </li>
              <li>
                <i className="fa fa-headphones" aria-hidden="true" />
                <span> Âm thanh</span>
              </li>
              <li>
                <i className="fa fa-laptop" aria-hidden="true" />
                <span> Phụ kiện</span>
              </li>
              <li>
                <i className="fa fa-mobile" aria-hidden="true" />
                <span> Hàng cũ</span>
              </li>
              <li>
                <i className="fa fa-mobile" aria-hidden="true" />
                <span> Thu cũ</span>
              </li>
              <li>
                <i className="fa fa-mobile" aria-hidden="true" />
                <span> SmartWatch</span>
              </li>
              <li>
                <i className="fa fa-mobile" aria-hidden="true" />
                <span> SmartHome</span>
              </li>
              <li>
                <i className="fa fa-mobile" aria-hidden="true" />
                <span> Tin công nghệ</span>
              </li>
            </ul>
          </div>
          <div className="banner">
            <div className="row_banner">
              <div className="col_8">
                <div>
                  <img
                    src="https://didongthongminh.vn/images/banners/resized/iphone-cu-banner_1653712202.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="col_4">
                <div>
                  <img
                    src="https://didongthongminh.vn/images/banners/resized/banner_11-pro-max-cu_1653714639.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://didongthongminh.vn/images/banners/resized/banner_8-plus_1653715065.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.mediamart.vn/images/banner/oppo-a16k_07ca67fe.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://didongthongminh.vn/images/slideshow/2022/05/21/slideshow_large/iphone-11_3_1653142169.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}