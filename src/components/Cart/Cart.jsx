import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import CartEntry from "../CartEntry/CartEntry.jsx";
import {
  addToCart,
  deleteEntryFromCart,
  removeFromCart,
} from "../../cart-helpers/cart-helpers.js";

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
          <CartEntry
            key={entry.id}
            {...entry}
            onIncrement={() => addToCart(cart, entry, 1, setCart)}
            onDecrement={() => removeFromCart(cart, entry, setCart)}
            onDelete={() => deleteEntryFromCart(cart, entry, setCart)}
          />
        ))}
      </section>
      {cart.length > 0 && (
        <>
          <p>Subtotal: {totalPrice}</p>
          <button className="checkout-btn" onClick={onCheckout}>
            Checkout
          </button>
        </>
      )}
    </>
  );
}
