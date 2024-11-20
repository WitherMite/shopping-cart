import { createBrowserRouter } from "react-router-dom";
import App from "./components/App/App.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import Store from "./components/Store/Store.jsx";
import Cart from "./components/Cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/store", element: <Store /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default router;
