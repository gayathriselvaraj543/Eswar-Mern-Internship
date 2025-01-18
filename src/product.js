import React from "react";
const ProductList = ({ addToCart }) => {
  const products = ["Laptop", "Mobile", "Headphones"]; 
  return (
    <div>
      <h2>Product List</h2>
      <div>
        {products[0]}{" "}
        <button onClick={() => addToCart(products[0])}>Add to Cart</button>
      </div>
      <div>
        {products[1]}{" "}
        <button onClick={() => addToCart(products[1])}>Add to Cart</button>
      </div>
      <div>
        {products[2]}{" "}
        <button onClick={() => addToCart(products[2])}>Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductList;
