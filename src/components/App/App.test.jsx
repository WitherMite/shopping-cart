import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App.jsx";

describe("App component", () => {
  it("Renders a logo and nav bar inside a header and a main tag", () => {
    const router = createMemoryRouter([{ path: "/", element: <App /> }]);
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });

  // describe("Nav bar", () => {
  //   // TODO: add a pop out side panel for viewing and editing cart
  //   //       have cart icon have a notification showing item count
  //   it("", () => {});
  // });
});
