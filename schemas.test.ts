import { describe, expect, test } from "vitest";
import {
  PizzaTypeSchema,
  PizzaSchema,
  AmountSchema,
  OrderIdSchema,
} from "./pizzashop";

describe("Zod schemas tests", () => {
  test("PizzaTypeSchema accepts margherita", () => {
    expect(PizzaTypeSchema.parse("margherita")).toBe("margherita");
  });

  test("PizzaTypeSchema reject capital M ", () => {
    expect(() => PizzaTypeSchema.parse("Margherita")).toThrow();
  });

  test("PizzaSchema accepts a valid pizza object", () => {
    expect(PizzaSchema.parse({ type: "pepperoni", price: 120 })).toEqual({
      type: "pepperoni",
      price: 120,
    });
  });

  test("PizzaSchema rejects missing price", () => {
    expect(() => PizzaSchema.parse({ type: "pepperoni" })).toThrow();
  });

  test("AmountSchema rejects a string", () => {
    expect(() => AmountSchema.parse("100")).toThrow();
  });

  test("OrderIdSchema accepts zero", () => {
    expect(OrderIdSchema.parse(0)).toBe(0);
  });
});
