// Skill 3: Interfaces

//Book Interface

interface Book {
  title: string;
  author: string;
  pages: number;
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
};

console.log(myBook.title);

// Nested & Optional Properties

interface Adress {
  city: string;
  postalCode?: string;
}

interface Person {
  name: string;
  age: number;
  address: Adress;
}

const persons: Person[] = [
  { name: "Alen", age: 31, address: { city: "New York", postalCode: "10001" } },
  { name: "Michiel", age: 29, address: { city: "Los Angeles" } },
];

console.log(persons[0].address.city);
console.log(persons[1].address.city);
