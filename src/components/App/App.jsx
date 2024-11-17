import { Outlet } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import AppNav from "./App-nav";

export default function App({ navBar }) {
  const [cart, setCart] = useState([]);
  const navigation = navBar || <AppNav cart={cart} setCart={setCart}></AppNav>;
  return (
    <>
      <header>
        <img src="" alt="" />
        {navigation}
      </header>
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
    </>
  );
}

App.propTypes = {
  navBar: PropTypes.element,
};
