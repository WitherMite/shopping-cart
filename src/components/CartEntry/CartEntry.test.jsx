import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import testEntries from "./testEntries.js";
import CartEntry from "./CartEntry.jsx";

describe("CartEntry component", () => {
  it("Renders entry info and component's children", () => {
    const childEle = <div>Hello there.</div>;
    const { container } = render(
      <CartEntry {...testEntries[0]}>{childEle}</CartEntry>
    );

    expect(container).toMatchSnapshot();
  });

  it("Clicking + button calls onIncrement prop", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();
    render(<CartEntry {...testEntries[0]} onIncrement={fn} />);

    const button = screen.getByRole("button", { name: "+" });
    await user.click(button);

    expect(fn).toHaveBeenCalled();
  });

  it("Clicking - button calls onDecrement prop", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();
    render(<CartEntry {...testEntries[1]} onDecrement={fn} />);

    const button = screen.getByRole("button", { name: "-" });
    await user.click(button);

    expect(fn).toHaveBeenCalled();
  });

  it("Clicking Remove from Cart button calls onDelete prop", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();
    render(<CartEntry {...testEntries[2]} onDelete={fn} />);

    const button = screen.getByRole("button", { name: "Remove from Cart" });
    await user.click(button);

    expect(fn).toHaveBeenCalled();
  });
});
