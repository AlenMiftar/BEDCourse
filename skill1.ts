// ---Skill 1: Union Types (| means OR)

//ID Card
type IDType = number | string;

const showID = (id: IDType): string => {
  const message = `Your ID is: ${id}`;
  console.log(message);
  return message;
};

showID(12345);
showID("AB123");

// Fruit basked
type Fruit = "apple" | "banana" | "orange";

const eatFruit = (Fruit: Fruit): string => {
  const message = `You ate an ${Fruit}.`;
  console.log(message);
  return message;
};

eatFruit("apple");
eatFruit("orange");
