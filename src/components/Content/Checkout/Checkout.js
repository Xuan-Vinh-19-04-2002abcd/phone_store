import React from "react";
import { useState, useRef } from "react";
import "./Checkout.css";
import emailjs from "@emailjs/browser";

function Checkout(props) {
  const form = useRef();
  const [inputs, setInputs] = useState({});
  const totalAmount = JSON.parse(localStorage.getItem("totalAmount"));
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v0pc6ps",
        "template_xtb144g",
        form.current,
        "SvCGTslmMjj4fLR9h"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your order has been success full!");
          setInputs({});
          window.location = "/";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h1 className="checkout__title">Checkout</h1>
      <form className="checkout__field" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="checkout__input"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
          placeholder="Name..."
        />
        <br />
        <input
          type="text"
          className="checkout__input"
          name="address"
          value={inputs.address || ""}
          onChange={handleChange}
          placeholder="Address..."
        />
        <br />
        <input
          type="tel"
          className="checkout__input"
          name="phone"
          value={inputs.phone || ""}
          onChange={handleChange}
          placeholder="Phone..."
        />
        <br />
        <input
          type="email"
          className="checkout__input"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          placeholder="Email..."
        />
        <br />
        <input
          type="text"
          name="created"
          value={new Date().toLocaleDateString()}
          hidden
        />
        <br />
        <input type="text" name="total" value={totalAmount} hidden />
        <br />
        <button className="checkout__btn" type="submit">
          Checkout
        </button>
      </form>
    </>
  );
}

export default Checkout;
