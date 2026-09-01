// Skill 2: Arrays & Array Methods

//Doubling Ages

const ages: number[] = [7, 9, 31, 31, 54];

const agesInFiveYears: number[] = ages.map((age: number): number => age + 5);

console.log(ages);
console.log(agesInFiveYears);

//Filtering Names
const names: string[] = ["Alen", "Michiel", "John", "Jane", "Alice", "Bob"];

const shortNames: string[] = names.filter(
  (name: string): boolean => name.length <= 4,
);

console.log(names);
console.log(shortNames);
