import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import logoImg from "../../assets/logoipsum-265.svg";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <header>
        <img src={logoImg} alt="" />
        <nav>
          <Link>Home</Link>
          <Link>Store</Link>
          <Link>Cart</Link>
        </nav>
      </header>
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
    </>
  );
}
