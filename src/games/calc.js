import { cons } from 'hexlet-pairs';
import getRandom from '../utils';

import playGame from '..';

const minNumber = 1;
const maxNumber = 50;
const description = 'What is the result of the expression?';

const generateOperation = () => {
  const randomIndex = getRandom(0, 2);
  if (randomIndex === 0) return '+';
  if (randomIndex === 1) return '-';
  return '*';
};

const getCorrectCalculation = (num1, num2, operation) => {
  if (operation === '+') return num1 + num2;
  if (operation === '-') return num1 - num2;
  return num1 * num2;
};

const generateQuestionAnswer = () => {
  const firstOperand = getRandom(minNumber, maxNumber);
  const lastOperand = getRandom(minNumber, maxNumber);
  const operation = generateOperation();

  const question = `${firstOperand} ${operation} ${lastOperand}`;
  const answer = String(getCorrectCalculation(firstOperand, lastOperand, operation));
  return cons(question, answer);
};

export default () => playGame(description, generateQuestionAnswer);
