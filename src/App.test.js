import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render the start page on initial load", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
    "Assessment"
  );
});
