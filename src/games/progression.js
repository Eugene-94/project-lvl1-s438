import { cons } from 'hexlet-pairs';
import getRandom from '../utils';

import {
  playGame, minNumber, maxNumber,
} from '..';

const description = 'What number is missing in the progression?';
const progressionMaxStep = 10;
const progressionLength = 10;

const getQuestion = (firstEl, step, hiddenPosition) => {
  let element = firstEl;
  let question = `${String(firstEl)} `;

  for (let i = 1; i <= progressionLength; i += 1) {
    element += step;
    question += i !== hiddenPosition ? `${String(element)} ` : '.. ';
  }

  return question;
};

const generateQuestionAnswer = () => {
  const progressionStep = getRandom(1, progressionMaxStep);
  const progressionFirstElement = getRandom(minNumber, maxNumber);
  const hiddenPosition = getRandom(1, progressionLength);

  const question = getQuestion(progressionFirstElement, progressionStep, hiddenPosition);
  const answer = String(progressionFirstElement + (hiddenPosition) * progressionStep);
  return cons(question, answer);
};

export default () => playGame(description, generateQuestionAnswer);
