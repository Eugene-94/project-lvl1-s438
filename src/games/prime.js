import { cons } from 'hexlet-pairs';
import getRandom from '../utils';

import playGame from '..';

const minNumber = 2;
const maxNumber = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestion = () => getRandom(minNumber, maxNumber);
const isPrime = (num) => {
  if (num < 2) return false;
  let prime = true;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
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
