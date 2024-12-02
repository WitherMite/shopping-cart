import { describe, it, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import testEntries from "../CartEntry/testEntries.js";
import userEvent from "@testing-library/user-event";
import CartEntry from "../CartEntry/CartEntry.jsx";
import Cart from "./Cart.jsx";

vi.mock("../CartEntry/CartEntry.jsx", { spy: true });

describe("Cart component", () => {
  it("Renders header", () => {
    render(<Cart cartState={[testEntries, () => {}]} />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      "Cart:"
    );
  });

  it("Calls CartEntry component for every fetched item", async () => {
    await act(async () => render(<Cart cartState={[testEntries, () => {}]} />));

    // Components are passed two args:[props, {}], unsure what the second object is
    // seems it's part of a legacy context API
    const propsOne = CartEntry.mock.calls[0][0];
    const propsTwo = CartEntry.mock.calls[1][0];
    const propsThree = CartEntry.mock.calls[2][0];

    expect(propsOne).toMatchObject(testEntries[0]);
    expect(propsTwo).toMatchObject(testEntries[1]);
    expect(propsThree).toMatchObject(testEntries[2]);
  });

  it("Renders correct subtotal in USD", () => {
    const actualSubtotal = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(
      testEntries.reduce((total, entry) => total + entry.price * entry.count, 0)
    );

    render(<Cart cartState={[testEntries, () => {}]} />);
    const subtotalElements = screen.getAllByText((content) =>
      content.startsWith("Subtotal: ")
    );

    expect(subtotalElements.length).toBe(2);
    expect(subtotalElements[0].textContent).toBe(`Subtotal: ${actualSubtotal}`);
    expect(subtotalElements[1].textContent).toBe(`Subtotal: ${actualSubtotal}`);
  });

  it("calls onCheckout prop when any Checkout button is clicked", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();
    render(<Cart cartState={[testEntries, () => {}]} onCheckout={fn} />);
    const buttons = screen.getAllByRole("button", { name: "Checkout" });

    for (const btn of buttons) {
      await user.click(btn);
    }

    expect(fn).toBeCalledTimes(buttons.length);
  });
});
