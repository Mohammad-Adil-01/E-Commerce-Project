import "../assets/Category.css";
import { cardData1, cardData2 } from "../assets/API.js";

import { useState } from "react";
export default function Category() {
  // Map over your data arrays to create card components
  const data1 = cardData1.map((item, idx) => (
    <CategoryCard
      key={idx}
      name={item.name}
      price={item.price}
      des={item.des}
      image={item.image}
    />
  ));

  const data2 = cardData2.map((item, idx) => (
    <CategoryCard
      key={idx}
      name={item.name}
      price={item.price}
      des={item.des}
      image={item.image}
    />
  ));

  return (
    <>
      <main className="category-main">
        <h1 className="para-text">Featured Categories</h1>
        <div className="card-container">
          <div className="list">{data1}</div>
          <div className="list">{data2}</div>
        </div>
      </main>
    </>
  );
}

function CategoryCard(props) {
  const [msg, setmsg] = useState("");
  function handleclick() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: props.name, price: props.price });
    localStorage.setItem("cart", JSON.stringify(cart));
    setmsg("Added Successfully !");
    setTimeout(() => {
      setmsg("");
    }, 1500);
  }
 
  return (
    <>
      <section className="section-1">
        <div className="category-container">
          <div className="card-inner">
            <div className="card-front">
              <h1>Name: {props.name}</h1>
              <h2>Price: {props.price}</h2>
              <h3>Description: {props.des}</h3>
              <img src={props.image} alt="Product" />
            </div>
            <div className="card-back">
              <h1>Name: {props.name}</h1>
              <h2>Price: {props.price}</h2>
              <h3>Description: {props.des}</h3>
              <img src={props.image} alt="Product" />
            </div>
          </div>
        </div>
        <button className="cart-btn" onClick={handleclick}>
          Add To Cart
        </button>
        {<div style={{ color: "green", marginTop: "1rem", fontSize: "1.5rem" }}>{msg}</div>}

      </section>
    </>
  );
}
