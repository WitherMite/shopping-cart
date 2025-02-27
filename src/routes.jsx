import App from "./components/App/App.jsx";
import ErrorElement from "./components/ErrorElement/ErrorElement.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import Store from "./components/Store/Store.jsx";
import Cart from "./components/Cart/Cart.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/store", element: <Store /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: (
      <App>
        <ErrorElement />
      </App>
    ),
  },
];

export default routes;
