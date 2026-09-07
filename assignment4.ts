type ToUppercase = (result: string) => void;

const uppercase = (message: string, callback: ToUppercase): void => {
  const result = message.toUpperCase();
  callback(result);
};

uppercase("hello world", (result) =>
  console.log(`Uppercase result: ${result}`),
);
