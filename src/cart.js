import React from "react";
const ShoppingCart = ({ items }) => {
  return (
    <div>
      <p>Items in cart:</p>
      <ul>
        {!items.length && <li>Your cart is Empty</li>}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default ShoppingCart;
