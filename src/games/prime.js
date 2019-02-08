import { cons } from 'hexlet-pairs';
import getRandom from '../utils';

import playGame from '..';

const minNumber = -50;
const maxNumber = 50;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestion = () => getRandom(minNumber, maxNumber);
const isPrime = (num) => {
  if (num === 1) return false;
  const cycleLimit = Math.floor(Math.sqrt(Math.abs(num)));
  let prime = true;
  for (let i = 2; i <= cycleLimit; i += 1) {
    if (Math.abs(num) % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

const getAnswer = isPrimeResult => (isPrimeResult ? 'yes' : 'no');

const generateQuestionAnswer = () => {
  const question = getQuestion();
  const answer = getAnswer(isPrime(question));
  return cons(question, answer);
};

export default () => playGame(description, generateQuestionAnswer);
