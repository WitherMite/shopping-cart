import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import CartEntry from "../CartEntry/CartEntry.jsx";

const USDFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

Cart.propTypes = {
  cartState: PropTypes.array,
  onCheckout: PropTypes.func,
};

export default function Cart({ cartState, onCheckout }) {
  const [cart, setCart] = useOutletContext() || cartState;
  const totalPrice = USDFormatter.format(
    cart.reduce((total, item) => total + item.price * item.count, 0)
  );
  return (
    <>
      <h1>Cart:</h1>
      <p>Subtotal: {totalPrice}</p>
      <button className="checkout-btn" onClick={onCheckout}>
        Checkout
      </button>
      <section className="cart-grid-container">
        {cart.map((entry) => (
          <CartEntry key={entry.id} {...entry} handleClick={setCart} />
        ))}
      </section>
      <p>Subtotal: {totalPrice}</p>
      <button className="checkout-btn" onClick={onCheckout}>
        Checkout
      </button>
    </>
  );
}
