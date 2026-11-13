Question: The test is still red. Read the error. Which schema stopped it, and why? Your editor probably shows a red line under menu[pizzaType], yet Vitest still ran the code. What does that tell you about TypeScript types versus Zod checks?

The PizzatypeSchema stopped the test because it includes "vegetarian" as a valid pizza type, but the `menu` object does not have a corresponding property for "vegetarian". This discrepancy causes TypeScript to raise an error when trying to access `menu[pizzaType]` with "vegetarian", as it is not defined in the `menu` object.

TypeScript types are checked at compile time, while Zod checks are performed at runtime. This means that even though the TypeScript compiler raises an error due to the type mismatch, the code can still run and be tested by Vitest. The Zod schema will validate the input at runtime, but it does not prevent the TypeScript error from occurring during compilation.
