import { fireEvent, render, screen } from "@testing-library/react";
import Start from "./Start";

const setRecordMock = jest.fn();
const record = { progress: -1, answers: {}, scores: {} };

it("should render the start button", () => {
  render(<Start />);
  expect(screen.getByRole("button")).toBeVisible();
  expect(screen.getByRole("button").textContent).toBe("Start");
});

it("should increase the progress by 1 after click the button", () => {
  render(<Start record={record} setRecord={setRecordMock} />);
  fireEvent.click(screen.getByRole("button"));
  expect(setRecordMock).toBeCalled();
  expect(setRecordMock.mock.calls[0][0].progress).toBe(0);
});
