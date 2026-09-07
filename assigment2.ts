type GreetingFunction = (message: string) => void;

const sayHelloLater = (callback: GreetingFunction): void => {
  setTimeout(() => {
    callback("Hi, I am late!");
  }, 2000);
};

sayHelloLater((message) => console.log(message));
