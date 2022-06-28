import React, { Component } from 'react';
import Content from '../Content/Content';
import { Routes, Route, Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="menu-one">
          <div className="menu-header-logo">
            <div className="header-logo">
              <img src="https://i.imgur.com/wTQSAZ8.png" alt="" />
            </div>
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
              <i className="fa fa-shopping-cart" aria-hidden="true" />
              <Link to="/cart" className="cart-link">
                Giỏ hàng
              </Link>
            </div>
          </div>
        </div>
        <div className="menu-bottom">
          <ul>
            <li>
              <Link to="/" className="trangchu">
                Trang chủ
              </Link>
            </li>
            <li>
              <i className="fa fa-mobile" aria-hidden="true" />
              <span> Điện thoại</span>
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
                  src="https://cdn.tgdd.vn/Files/2019/01/17/1145148/dien-thoai-man-hinh-gap_800x450.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}