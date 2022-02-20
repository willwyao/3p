import { fireEvent, render, screen } from "@testing-library/react";
import Finish from "./Finish";
import quizzesJSON from "../data/quizzes.json";

const quizzes = quizzesJSON.quizzes;
const resetMock = jest.fn();
const record = {"progress":5,"answers":{"1-1":2,"1-2":3,"1-3":1,"2-3":0,"2-4":1,"3-4":0,"3-5":0,"3-1":1,"3-2":0,"4-1":2,"4-3":0,"4-5":2,"5-5":2,"5-1":3,"5-2":3},"scores":{"1":2,"2":2,"3":0,"4":3,"5":2}};

it("should render the start button", () => {
  render(<Finish quizzes={quizzes} record={record} reset={resetMock} />);
  expect(screen.getByRole("button")).toBeVisible();
  expect(screen.getByRole("button").textContent).toBe("Try again");
});

it('should reset the record after click the button',()=>{
  render(<Finish quizzes={quizzes} record={record} reset={resetMock} />);
  fireEvent.click(screen.getByRole('button'));
  expect(resetMock).toBeCalled();
})

it('should display the total score',()=>{
  render(<Finish quizzes={quizzes} record={record} reset={resetMock} />);
  expect(screen.getByText(/Your final score/).textContent).toMatch(/9/);
})