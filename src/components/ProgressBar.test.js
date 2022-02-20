import { render } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

const progress = 3;
const amount = 5;

it("should render 60%", () => {
  const { container } = render(
    <ProgressBar progress={progress} amount={amount} />
  );
  expect(container.querySelector(".progress-bar")).toBeVisible();
  expect(container.querySelector(".progress-bar").textContent).toBe("60%");
});
