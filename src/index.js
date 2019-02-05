import readlineSync from 'readline-sync';

const roundLength = 3;
const minNumber = 0;
const maxNumber = 100;
export const getGreeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
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
const getWinMessage = user => console.log(`Congratulations, ${user}`);

export const isEven = num => num % 2 === 0;

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const playGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (counter) => {
    if (counter === roundLength) return getWinMessage(userName);

    const num = getRandom(minNumber, maxNumber);
    console.log(`Question: ${num}`);

    const userResponse = readlineSync.question('Your answer: ');

    if ((isEven(num) && userResponse === 'yes') || (!isEven(num) && userResponse === 'no')) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    return getFailMessage(userName, userResponse, isEven(num));
  };
  iter(0);
};
