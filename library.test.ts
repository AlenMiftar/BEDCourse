import { describe, test, expect } from "vitest";
import { findBook } from "./library";

describe("Library Unit Tests", () => {
  test("findBook returns dune", () => {
    const book = findBook("dune");
    expect(book).toEqual({ title: "dune", copiesAvailable: 3 });
  });
});

test("findBook returns foundation even with zero copies", () => {
  const book = findBook("foundation");
  expect(book).toEqual({ title: "foundation", copiesAvailable: 0 });
});

test("findBook throws for unknown book title", () => {
  expect(() => findBook("harry potter")).toThrow();
});

test("findBook throws for unknown book title", () => {
  expect(() => findBook(42)).toThrow();
});
