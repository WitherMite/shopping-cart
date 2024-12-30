import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import ItemCard from "../ItemCard/ItemCard.jsx";
import testItems from "./testItems.js";
import routes from "../../routes.jsx";

vi.mock("../ItemCard/ItemCard.jsx", { spy: true });

describe("Store component", () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/store"] });
  window.fetch = vi.fn(
    async (url) =>
      url === "https://fakestoreapi.com/products" && {
        json: () =>
          new Promise((resolve) => {
            resolve(testItems);
          }),
      }
  );

  it("Renders header", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      "Store:"
    );
  });

  it("Calls ItemCard component for every fetched item", async () => {
    await act(async () => render(<RouterProvider router={router} />));

    // Components are passed two args:[props, {}], unsure what the second object is
    // seems it's part of a legacy context API
    const propsOne = ItemCard.mock.calls[0][0];
    const propsTwo = ItemCard.mock.calls[1][0];
    const propsThree = ItemCard.mock.calls[2][0];

    expect(propsOne).toMatchObject(testItems[0]);
    expect(propsTwo).toMatchObject(testItems[1]);
    expect(propsThree).toMatchObject(testItems[2]);
  });
});
