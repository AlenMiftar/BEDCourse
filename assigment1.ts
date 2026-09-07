type HelloFunction = (message: string) => void;

const callHello = (callback: HelloFunction): void => {
  callback("Hello from callback!");
};

callHello((message) => console.log(message));
