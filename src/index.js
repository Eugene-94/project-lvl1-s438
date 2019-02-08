import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const questionsAmount = 3;

const playGame = (gameDescription, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

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

export default playGame;
