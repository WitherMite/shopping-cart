import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import logoImg from "../../assets/logoipsum-265.svg";
import shopCartImg from "../../assets/shopping-cart.svg";
import shopBagImg from "../../assets/shopping-bag.svg";
import homeImg from "../../assets/home.svg";

export default function App() {
  const [cart, setCart] = useState([]);
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
            <Link to="/cart">
              <img src={shopCartImg} alt="Cart" className="nav-icon" />
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
    </>
  );
}
