import readlineSync from 'readline-sync';

const questionsAmount = 3;
const minNumber = 0;
const maxNumber = 100;
export const getGreeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const displayGreeting = () => console.log('Welcome to the Brain Games!');

export const displayGameDescription = (game) => {
  switch (game) {
    case 'brain-even':
      console.log('Answer "yes" if number even otherwise answer "no".');
      break;
    default:
  }
};

const getFailMessage = (user, answer, isEven) => {
  if (isEven) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${user}`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${user}`);
  }
};

const isEven = num => num % 2 === 0;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isCorrectAnswer = (number, answer) => {
  if (isEven(number) && answer === 'yes') return true;
  if (!isEven(number) && answer === 'no') return true;
  return false;
};

export const playBrainEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (counter) => {
    if (counter === questionsAmount) {
      console.log(`Congratulations, ${userName}`);
      return null;
    }

    const randomNumber = getRandom(minNumber, maxNumber);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (isCorrectAnswer(randomNumber, userAnswer)) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    return getFailMessage(userName, userAnswer, isEven(randomNumber));
  };
  iter(0);
};
