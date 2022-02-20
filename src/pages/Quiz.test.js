import { fireEvent, render, screen } from "@testing-library/react";
import Quiz from "./Quiz";

const quizzes = [
  {
    id: 1,
    title: "Quiz 1",
    question_ids: [1, 2, 3],
  },
];
const questions = {
  1: {
    id: 1,
    question: "What is the second largest country (total area)?",
    answers: ["United States", "Russia", "Canada", "China"],
    correct_answer: 2,
  },
  2: {
    id: 2,
    question: "What is the most common language?",
    answers: ["English", "Hindi", "Spanish", "Mandarin"],
    correct_answer: 3,
  },
  3: {
    id: 3,
    question: "What is the largest ocean?",
    answers: [
      "Pacific Ocean",
      "Southern Ocean",
      "Indian Ocean",
      "Atlantic Ocean",
    ],
    correct_answer: 0,
  },
};

const record = {
  progress: 0,
  answers: {},
  scores: {},
};

const record2 = {
  progress: 0,
  answers: { "1-1": 0, "1-2": 3, "1-3": 1 },
  scores: {},
};

const setRecordMock = jest.fn();

afterEach(() => {
  setRecordMock.mockClear();
});

it("shoud not render the button before finished all questions", () => {
  render(
    <Quiz
      quizzes={quizzes}
      questions={questions}
      record={record}
      setRecord={setRecordMock}
    />
  );
  expect(screen.queryByRole("button")).toBeNull();
});

it("should render the button after finished all questions", () => {
  render(
    <Quiz
      quizzes={quizzes}
      questions={questions}
      record={record2}
      setRecord={setRecordMock}
    />
  );
  expect(screen.getByRole("button")).toBeVisible();
});

it("should calculate score after click the button", () => {
  render(
    <Quiz
      quizzes={quizzes}
      questions={questions}
      record={record2}
      setRecord={setRecordMock}
    />
  );
  fireEvent.click(screen.getByRole("button"));
  expect(setRecordMock).toBeCalled();
  expect(setRecordMock.mock.calls[0][0].scores[quizzes[0].id]).toBe(1);
});

it("should increase the progress by 1 after click the button", () => {
  render(
    <Quiz
      quizzes={quizzes}
      questions={questions}
      record={record2}
      setRecord={setRecordMock}
    />
  );
  fireEvent.click(screen.getByRole("button"));
  expect(setRecordMock).toBeCalled();
  expect(setRecordMock.mock.calls[0][0].progress).toBe(1);
});
