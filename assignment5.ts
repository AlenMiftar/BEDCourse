type OrderStatusFunction = (message: string) => void;

const orderPizza = (orderStatus: OrderStatusFunction): void => {
  console.log("Ordering pizza...");
  setTimeout(() => {
    const message = "Your pizza is ready!";
    orderStatus(message);
  }, 2000);
};

const orderStatus = (message: string): void => {
  console.log(message);
};

orderPizza(orderStatus);
