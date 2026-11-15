import { describe, test, expect } from "vitest";
import { findBook, checkOutBook } from "./library";

describe("Library Unit Tests", () => {
  test("findBook returns dune", () => {
    const book = findBook("dune");
    expect(book).toEqual({ title: "dune", copiesAvailable: 3 });
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

  test("checkOutBook returns a number", () => {
    const loanId = checkOutBook({ title: "dune", copiesAvailable: 3 });

    expect(typeof loanId).toBe("number");
  });

  test("checkOutBook returns a whole number", () => {
    const loanId = checkOutBook({ title: "dune", copiesAvailable: 3 });

    expect(Number.isInteger(loanId)).toBe(true);
  });

  test("checkOutBook returns a number between 1000 and 9999", () => {
    const loanId = checkOutBook({ title: "dune", copiesAvailable: 3 });

    expect(loanId).toBeGreaterThanOrEqual(1000);
    expect(loanId).toBeLessThanOrEqual(9999);
  });

  test("checkOutBook throws when no copies are available", () => {
    expect(() =>
      checkOutBook({
        title: "foundation",
        copiesAvailable: 0,
      }),
    ).toThrow("No copies available");
  });

  test("checkOutBook throws when copiesAvailable is missing", () => {
    expect(() =>
      checkOutBook({
        title: "dune",
      }),
    ).toThrow();
  });
});
