import { describe, test, expect } from "vitest";
import {
  createPizza,
  orderPizza,
  sendOrder,
  chargeCustomer,
} from "./pizzashop";

describe("Pizza Shop Unit Tests", () => {
  test("createPizza returns correct type and price", () => {
    const pizza = createPizza("vegetarian");

    expect(pizza).toEqual({ type: "vegetarian", price: 110 });
  });

  test("createPizza throws for unknown type", () => {
    expect(() => createPizza("hawaii")).toThrow();
  });

  test("sendOrder returns a numeric order id", () => {
    const id = sendOrder({ type: "pepperoni", price: 120 });

    expect(typeof id).toBe("number");
    expect(Number.isInteger(id)).toBe(true);
    expect(id).toBeGreaterThanOrEqual(0);
    expect(id).toBeLessThan(1000);
  });

  test("orderPizza returns true for a valid pizza", () => {
    const result = orderPizza("pepperoni");

    expect(result).toBe(true);
  });

  test("orderPizza returns true for a vegetarian pizza", () => {
    const result = orderPizza("vegetarian");

    expect(result).toBe(true);
  });

  test("chargeCustomer returns true for a valid order id and amount", () => {
    const result = chargeCustomer(44, 100);

    expect(result).toBe(true);
  });
});
