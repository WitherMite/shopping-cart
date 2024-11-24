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
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
    <section className="store-item-card">
      <img src={image} alt="" className="item-img" />
      <h2 className="item-title">{title}</h2>
      <p className="item-description">{description}</p>
      <p className="item-price">{USDFormatter.format(price)}</p>
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
      <button onClick={addToCart} className="add-item-btn">
        Add to Cart
      </button>
    </section>
  );
}
