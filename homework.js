const firstName = "Alen";
const favoriteNumber = 12;
const likesCoding = true;
const birthYear = 1995;
const currentYear = new Date().getFullYear();

console.log(
  `Hi, my name is ${firstName}, my favorite number is ${favoriteNumber} and it is ${likesCoding} that I like coding.`,
);

console.log(currentYear - birthYear); // 31

console.log(
  `Hi, my name is ${firstName} and I am ${currentYear - birthYear} years old.`,
);

const favoriteFood = ["Pizza", "Burger", "Pasta"];

const student = {
  myName: "Alen",
  favoriteNumber: 12,
  likesCoding: true,
  favoriteFood: ["Pizza", "Burger", "Pasta"],
};

console.log(student);
console.log(student.favoriteFood[2]);
