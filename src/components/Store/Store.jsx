import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard.jsx";

export default function Store() {
  const [cart, setCart] = useOutletContext();
  const [items, setItems] = useState([]);
  useEffect(() => {
    // TODO: handle errors - render loading/error elements
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(JSON.parse(json)));
  }, []);

  function addItemToCart(item, count) {
    if (count < 1 || count % 1 !== 0) return;
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
