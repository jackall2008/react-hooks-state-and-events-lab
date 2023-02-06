import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add To Cart";

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCartClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
