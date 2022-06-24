import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
export const Card = (props) => {
    return (
      <div className="card">
        <img src={props.img}></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-price">{props.price}</p>
          <button
            className="btn"
            onClick={(product) => {
              props.saveLocalStorage(product);
            }}
          >
            <p>
              Buy now <ion-icon name="cart-outline"></ion-icon>{" "}
            </p>
          </button>
          
           <Link to = {props.URL}>Detail</Link>
        </div>
      </div>
    );
}