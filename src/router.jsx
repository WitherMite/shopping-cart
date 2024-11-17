import { createBrowserRouter } from "react-router-dom";
import App from "./components/App/App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <p>page content</p> }],
  },
]);

export default router;
