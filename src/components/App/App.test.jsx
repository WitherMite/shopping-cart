import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import testEntries from "../CartEntry/testEntries.js";
import App from "./App.jsx";

describe("App component", () => {
  it("Renders a logo and nav bar inside a header and a main tag", () => {
    const router = createMemoryRouter([{ path: "/", element: <App /> }]);
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });

  describe("Nav bar", () => {
    it("cart icon has a notification showing item count", () => {
      const router = createMemoryRouter([
        { path: "/", element: <App initialCart={testEntries} /> },
      ]);
      render(<RouterProvider router={router} />);

      const itemCount = testEntries.reduce(
        (count, entry) => count + entry.count,
        0
      );
      const cartIcon = screen.getByRole("link", { name: "Cart" });
      expect(() => within(cartIcon).getByText(`${itemCount}`)).not.toThrow();
    });
    it("cart icon does not show a notification for empty cart", () => {
      const router = createMemoryRouter([{ path: "/", element: <App /> }]);
      render(<RouterProvider router={router} />);

      const cartIcon = screen.getByRole("link", { name: "Cart" });
      expect(() => within(cartIcon).getByText("0")).toThrow();
    });
  });
});
