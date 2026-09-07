type PrintResult = (result: number) => void;

const calculate = (a: number, b: number, callback: PrintResult): void => {
  const result = a + b;
  callback(result);
};

calculate(5, 10, (result) => console.log(`The result is: ${result}`));
