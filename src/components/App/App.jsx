import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import logoImg from "../../assets/logoipsum-265.svg";
import shopCartImg from "../../assets/shopping-cart.svg";
import shopBagImg from "../../assets/shopping-bag.svg";
import homeImg from "../../assets/home.svg";

App.propTypes = {
  initialCart: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default function App({ initialCart = [], children }) {
  const [cart, setCart] = useState(initialCart);
  return (
    <>
      <header>
        <div className="header-flex-container">
          <Link to="/">
            <img src={logoImg} alt="" />
          </Link>
          <nav>
            <Link to="/">
              <img src={homeImg} alt="Home" className="nav-icon" />
            </Link>
            <Link to="/store">
              <img src={shopBagImg} alt="Store" className="nav-icon" />
            </Link>
            <Link to="/cart" aria-labelledby="cartLinkImg">
              <img
                src={shopCartImg}
                alt="Cart"
                className="nav-icon"
                id="cartLinkImg"
              />
              {cart.length > 0 && (
                <span className="notification">
                  {cart.reduce((count, entry) => count + entry.count, 0)}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>
      <main>{children || <Outlet context={[cart, setCart]} />}</main>
    </>
  );
}
