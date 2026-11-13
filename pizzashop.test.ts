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

  test("chargeCustomer returns true for a valid order id and amount", () => {
    const result = chargeCustomer(44, 100);

    expect(result).toBe(true);
  });

  test("chargeCustomer throws for invalid order id", () => {
    expect(() => chargeCustomer(undefined, 100)).toThrow(
      "Cannot charge the customer without a valid order ID!",
    );
  });

  test("chargeCustomer throws for negative order id", () => {
    expect(() => chargeCustomer(-1, 100)).toThrow();
  });

  test("chargeCustomer throws for decimal order id", () => {
    expect(() => chargeCustomer(12.5, 100)).toThrow();
  });

  test("chargeCustomer throws when amount is zero", () => {
    expect(() => chargeCustomer(42, 0)).toThrow();
  });
});
