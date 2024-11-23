import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard.jsx";
import testItems from "./testItems.js";

export default function Store() {
  const [cart, setCart] = useOutletContext();
  const [items, setItems] = useState([]);
  useEffect(() => {
    // TODO: fetch items from api instead: https://fakestoreapi.com/docs
    setItems(testItems);
  }, []);

  function addItemToCart(item, count) {
    const newCart = [];
    let inCart = false;
    cart.forEach((entry) => {
      if (entry.id === item.id) {
        inCart = true;
        newCart.push({ ...entry, count: entry.count + count });
      } else newCart.push(entry);
    });
    if (!inCart) newCart.push({ ...item, count });
    setCart(newCart);
  }

  return (
    <>
      <h1>Store:</h1>
      <section className="store-grid-container">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            {...item}
            handleClick={(count) => addItemToCart(item, count)}
          />
        ))}
      </section>
    </>
  );
}
