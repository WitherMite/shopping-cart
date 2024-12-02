import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItemCard from "../ItemCard/ItemCard.jsx";
import testItems from "../Store/testItems.js";

// have description be hidden until element is clicked

describe("ItemCard component", () => {
  it("Renders item information", () => {
    const { container } = render(
      <ItemCard {...testItems[0]} handleClick={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Renders controlled input field for count", async () => {
    const user = userEvent.setup();
    render(<ItemCard {...testItems[1]} handleClick={() => {}} />);

    const input = screen.getByRole("spinbutton", { name: "Count:" });
    const initialVal = input.value;
    await user.click(input);
    await user.keyboard("{backspace}{4}");
    const secondVal = input.value;
    await user.click(input);
    await user.keyboard("{backspace}{1}{0}{0}");
    const thirdVal = input.value;

    expect(initialVal).toBe("1");
    expect(secondVal).toBe("4");
    expect(thirdVal).toBe("100");
  });

  it("Clicking button calls handleClick with input's number value", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();
    render(<ItemCard {...testItems[2]} handleClick={fn} />);

    const button = screen.getByRole("button", { name: "Add to Cart" });
    await user.click(button);
    const input = screen.getByRole("spinbutton", { name: "Count:" });
    await user.click(input);
    await user.keyboard("{backspace}{4}");
    await user.click(button);

    expect(fn).toHaveBeenNthCalledWith(1, 1);
    expect(fn).toHaveBeenNthCalledWith(2, 4);
  });

  it("Clicking button resets count input's value", async () => {
    const user = userEvent.setup();
    render(<ItemCard {...testItems[1]} handleClick={() => {}} />);

    const input = screen.getByRole("spinbutton", { name: "Count:" });
    const initialVal = input.value;
    await user.click(input);
    await user.keyboard("{backspace}{4}");
    const secondVal = input.value;
    const button = screen.getByRole("button", { name: "Add to Cart" });
    await user.click(button);
    const thirdVal = input.value;

    expect(thirdVal).toBe(initialVal);
    expect(thirdVal).not.toBe(secondVal);
  });
});
