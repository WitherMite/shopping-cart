import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render } from "@testing-library/react";
import { it, expect } from "vitest";
import Homepage from "./Homepage.jsx";

it("Renders static homepage", () => {
  const router = createMemoryRouter([{ path: "/", element: <Homepage /> }]);
  const { container } = render(<RouterProvider router={router} />);
  expect(container).toMatchSnapshot();
});
