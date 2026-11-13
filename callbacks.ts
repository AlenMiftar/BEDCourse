const greet = (firsName: string, callback: () => void) => {
  console.log(`Hello ${firsName}`);
  callback();
};

greet("Michiel", () => {
  console.log("This is a callback function.");
});

const sum = (a: number, b: number, callback: (result: number) => void) => {
  const result = a + b;
  callback(result);
};

sum(5, 10, (result: number): void => {
  console.log(`The sum is: ${result}`);
});

type DelayedMessage = {
  callback: DelayedMessage;
  delay: number;
  message: string;
};

const delayedMessage = (callback: any, delay: any, message: any) => {
  setTimeout(() => {
    console.log(message);
    callback();
  }, delay);
};

delayedMessage(
  () => {
    console.log("The delay is over!");
  },
  2000,
  "This message appears after 2 seconds.",
);

const number: number[] = [1, 2, 3, 4, 5];

type ProcessArrayType = (e: number) => void;

const processArray = (arr: number[], callback: ProcessArrayType) => {
  arr.forEach((e: number) => {
    callback(e);
  });
};

processArray(number, (number: number) => {
  console.log(number * 2);
});

type SumType = (a: number, b: number) => number;

const calculator = (a: number, b: number, callback: SumType) => {
  return callback(a, b);
};

const sum2 = calculator(5, 3, (a: number, b: number): number => {
  return a + b;
});

const product = calculator(5, 3, (a: number, b: number): number => {
  return a * b;
});

console.log(sum2); // Output: 8
console.log(product); // Output: 15
///////////////////////////////////////////////////////////////
