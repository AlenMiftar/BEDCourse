// skill 4

// Filter Only

interface Product {
  id: number;
  name: string;
  price: number;
  tags: string[];
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200, tags: ["work", "power"] },
  { id: 2, name: "Smartphone", price: 800, tags: ["mobile", "communication"] },
  { id: 3, name: "Headphones", price: 150, tags: ["audio", "music"] },
];

const cheaperProducts = products
  .filter((p) => p.price < 1000)
  .map((p) => p.name)
  .join(", ");

console.log(`Products cheaper than $1000: ${cheaperProducts}`);
