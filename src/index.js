import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const questionsAmount = 3;
export const minNumber = 1;
export const maxNumber = 100;

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const displayGameDescription = (game) => {
  switch (game) {
    case 'brain-even':
      console.log('Answer "yes" if number even otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    default:
  }
};

export const playGame = (game, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  displayGameDescription(game);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (counter) => {
    if (counter === questionsAmount) {
      console.log(`Congratulations, ${userName}`);
      return;
    }

    const questionAnswer = getQuestionAnswer();
    const question = car(questionAnswer);
    const correctAnswer = cdr(questionAnswer);
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      iter(counter + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
    }
  };
  iter(0);
};
