// ---Skill 3: Enums (fixed list of options)

// Color Picker
enum Color {
  Red,
  Green,
  Blue,
}

const showColor = (color: Color): string => {
  const message = `You chose ${Color[color]}`;
  console.log(message);
  return message;
};

showColor(Color.Red);

// Pizza Order
enum PizzaSize {
  Small,
  Medium,
  Large,
}

const orderPizza = (pizzaSize: PizzaSize) => {
  const message = `You ordered a ${PizzaSize[pizzaSize]} pizza.`;
  console.log(message);
  return message;
};
orderPizza(PizzaSize.Small);
orderPizza(PizzaSize.Medium);
orderPizza(PizzaSize.Large);
