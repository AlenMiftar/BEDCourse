Question: The test is still red. Read the error. Which schema stopped it, and why? Your editor probably shows a red line under menu[pizzaType], yet Vitest still ran the code. What does that tell you about TypeScript types versus Zod checks?

answear: The PizzatypeSchema stopped the test because it includes "vegetarian" as a valid pizza type, but the `menu` object does not have a corresponding property for "vegetarian". This discrepancy causes TypeScript to raise an error when trying to access `menu[pizzaType]` with "vegetarian", as it is not defined in the `menu` object.

TypeScript types are checked at compile time, while Zod checks are performed at runtime. This means that even though the TypeScript compiler raises an error due to the type mismatch, the code can still run and be tested by Vitest. The Zod schema will validate the input at runtime, but it does not prevent the TypeScript error from occurring during compilation.

Explanation for 5: The test belongs in pizzashop.integration.test.ts because orderPizza() calls multiple functions (createPizza, sendOrder and chargeCustomer). The test checks that these functions work correctly together, which makes it an integration test.

Question: This bug would never have been found without a test. What was it, and what does that tell you about testing error messages?

answear: it was a spelling mistake in the error message. The word "customer" was misspelled as "cutomer" This tells us that testing error messages is important because it ensures that the messages are clear, accurate, and professional. Even small typos can lead to confusion for users or developers who rely on these messages for debugging and understanding the application's behavior.

Question: Why use toEqual and not toBe when you compare objects?

answear: We use toEqual because it compares the values and properties inside objects. toBe checks if two variables reference the exact same object in memory. Since Zod returns a new object when parsing, toEqual is the correct choice to check that the objects have the same data.

Question: Your "between 1000 and 9999" test uses a random number. Could it pass by luck even if the code were wrong? What could you do to make it more trustworthy?

answear: Yes, the test could pass by luck even if the code was incorrect, because Math.random() generates different values each time. To make the test more trustworthy, we can mock Math.random() using vi.spyOn() and provide a fixed return value. This makes the test predictable and allows us to check the exact expected result.
