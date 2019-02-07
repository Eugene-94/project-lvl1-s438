import { cons } from 'hexlet-pairs';

import {
  getRandom, playGame, minNumber, maxNumber,
} from '..';

const getQuestion = () => getRandom(minNumber, maxNumber);
const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const generateQuestionAnswer = () => {
  const question = getQuestion();
  const answer = isEven(question);
  return cons(question, answer);
};

export default () => playGame('brain-even', generateQuestionAnswer);
