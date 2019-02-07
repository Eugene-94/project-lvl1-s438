import { cons } from 'hexlet-pairs';
import getRandom from '../utils';

import {
  playGame, minNumber, maxNumber,
} from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = () => getRandom(minNumber, maxNumber);
const isEven = num => (num % 2 === 0);
const getAnswer = isEvenResult => (isEvenResult ? 'yes' : 'no');

const generateQuestionAnswer = () => {
  const question = getQuestion();
  const answer = getAnswer(isEven(question));
  return cons(question, answer);
};

export default () => playGame(description, generateQuestionAnswer);
