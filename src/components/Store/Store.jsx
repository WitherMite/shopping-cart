import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { addToCart } from "../../cart-helpers/cart-helpers.js";
import ErrorElement from "../ErrorElement/ErrorElement.jsx";

export default function Store() {
  const [cart, setCart] = useOutletContext();
  const [items, setItems] = useState([]);
  useEffect(() => {
    // TODO: render loading elements
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((err) => {
        setItems(<ErrorElement error={err} />);
      });
  }, []);

  return (
    <>
      <h1>Store:</h1>
      <section className="store-grid-container">
        {Array.isArray(items)
          ? items.map((item) => (
              <ItemCard
                key={item.id}
                {...item}
                handleClick={(count) => addToCart(cart, item, count, setCart)}
              />
            ))
          : items}
      </section>
    </>
  );
}
