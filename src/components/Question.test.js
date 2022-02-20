import { fireEvent, render, screen } from "@testing-library/react";
import Question from "./Question";

const question = {
  id: 1,
  question: "What is the second largest country (total area)?",
  answers: ["United States", "Russia", "Canada", "China"],
  correct_answer: 2,
};
const quizId = 1;
const record = {
  progress: 0,
  answers: { "1-1": 0, "1-2": 3, "1-3": 1 },
  scores: {},
};
const setRecordMock = jest.fn();

it('should render all options from a question',()=>{
  render(<Question question={question} quizId={quizId} record={record} setRecord={setRecordMock} />);
  expect(screen.queryAllByRole('radio').length).toBe(4);
})

it('should show the selected option from record',()=>{
  render(<Question question={question} quizId={quizId} record={record} setRecord={setRecordMock} />);
  expect(screen.queryAllByRole('radio')[0]).toHaveAttribute('checked');
})

it('should update the answer in record after selected an option',()=>{
  render(<Question question={question} quizId={quizId} record={record} setRecord={setRecordMock} />);
  fireEvent.click(screen.queryAllByRole('radio')[3]);
  expect(setRecordMock).toBeCalled();
  expect(setRecordMock.mock.calls[0][0].answers['1-1']).toBe(3);
})
