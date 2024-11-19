import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import logoImg from "../../assets/logoipsum-265.svg";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <header>
        <div className="header-flex-container">
          <Link>
            <img src={logoImg} alt="" />
          </Link>
          <nav>
            <Link>Home</Link>
            <Link>Store</Link>
            <Link>Cart</Link>
          </nav>
        </div>
      </header>
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
    </>
  );
}
