import { cons } from 'hexlet-pairs';
import getRandom from '../utils';

import playGame from '..';

const minNumber = 1;
const maxNumber = 50;
const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) return a;
  return getGcd(b, a % b);
};

const generateQuestionAnswer = () => {
  const firstNumber = getRandom(minNumber, maxNumber);
  const secondNumber = getRandom(minNumber, maxNumber);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(getGcd(firstNumber, secondNumber));
  return cons(question, answer);
};

export default () => playGame(description, generateQuestionAnswer);
