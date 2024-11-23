import { useState } from "react";
import PropTypes from "prop-types";

const USDFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

ItemCard.propTypes = {
  handleClick: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default function ItemCard({
  image,
  title,
  description,
  price,
  handleClick,
}) {
  const [count, setCount] = useState(1);

  function addToCart() {
    handleClick(count);
    setCount(1);
  }

  return (
    <section>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{USDFormatter.format(price)}</p>
      <div className="item-count-field">
        <label htmlFor={title + "-count"}>Count:</label>
        <input
          type="number"
          min="1"
          step="1"
          id={title + "-count"}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </section>
  );
}
