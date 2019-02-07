import { cons } from 'hexlet-pairs';

import {
  getRandom, playGame, minNumber, maxNumber,
} from '..';

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

export default () => playGame('brain-gcd', generateQuestionAnswer);
