import PropTypes from "prop-types";

const USDFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

CartEntry.propTypes = {
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onDelete: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default function CartEntry({
  image,
  title,
  price,
  count,
  onIncrement,
  onDecrement,
  onDelete,
  children,
}) {
  return (
    <section className="cart-item-card">
      <img src={image} alt="" className="item-img" />
      <h2 className="item-title">{title}</h2>
      {children}
      <p className="item-price">{USDFormatter.format(price) + " / item"}</p>
      <div className="item-count-field">
        <button onClick={onDecrement} className="cart-subtract-item-btn">
          -
        </button>
        <p className="item-count">{count}</p>
        <button onClick={onIncrement} className="cart-add-item-btn">
          +
        </button>
      </div>
      <p className="entry-price">{USDFormatter.format(price * count)}</p>
      <button onClick={onDelete} className="cart-remove-item-btn">
        Remove from Cart
      </button>
    </section>
  );
}
