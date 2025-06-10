import { useState } from "react";
import "../assets/Cart.css";
import { Link } from "react-router-dom";

export default function Cart() {
  // Helper to group cart items
  const getGroupedCart = () => {
    const store = JSON.parse(localStorage.getItem("cart")) || [];
    const group = {};
    store.forEach((item) => {
      const key = item.name + "|" + item.price;
      if (!group[key]) {
        group[key] = { ...item, quantity: 1 };
      } else {
        group[key].quantity += 1;
      }
    });
    return Object.values(group);
  };

  const [cartItems, setCartItems] = useState(getGroupedCart());

  // Helper to update localStorage and state
  const updateCart = (updatedItems) => {
    let flat = [];
    updatedItems.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        flat.push({ name: item.name, price: item.price });
      }
    });
    localStorage.setItem("cart", JSON.stringify(flat));
    setCartItems(updatedItems);
  };

  const handleAddQuantity = (idx) => {
    const updated = cartItems.map((item, i) =>
      i === idx ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const handleRemoveQuantity = (idx) => {
    const updated = cartItems
      .map((item, i) =>
        i === idx ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updated);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return<> <h1 className="empty">Cart is Empty : Shop Now </h1> 
              <p><Link to="/">Go To Shop</Link></p></>
  }
  const handleclick = () => {
    const OrderId =
      "ORD-" +
      Math.random().toString(36).substr(2, 5).toUpperCase() +
      "-" +
      Date.now();
    alert(
      `Your Order is Placed Successfully :) \nyour Order ID Number Is : ${OrderId}`
    );
  };
  return (
    <>
      <h1 className="cart-title">My Cart List</h1>
      <Link to="/">Go Back to Shop</Link>

      <div className="cart-container">
        <table border="0">
          <caption>List Of Order</caption>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    className="Add-quantity btn-quantity"
                    onClick={() => handleAddQuantity(idx)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="remove-quantity btn-quantity"
                    onClick={() => handleRemoveQuantity(idx)}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>Total : {total}</h1>
        <button className="order-btn" onClick={handleclick}>
          Order
        </button>
      </div>
    </>
  );
}
