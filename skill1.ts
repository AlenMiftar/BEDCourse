// Skill 1: Typed Variables & functions

// Student profile

const firstName: string = "Alen";
const age: number = 31;
const isEnrolled: boolean = true;

const describeStudent = (firstName: string, age: number): string => {
  return `${firstName} is ${age} years old.`;
};

console.log(describeStudent(firstName, age));

// Greeting with options

const formatGreeting = (name: string, formal?: boolean): string => {
  return formal ? `Good day ${name}.` : `Hi ${name}!`;
};

console.log(formatGreeting("Michiel", true));
console.log(formatGreeting("Michiel", false));
