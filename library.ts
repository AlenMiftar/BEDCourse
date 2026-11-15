import { z } from "zod";

const catalogue = {
  dune: { title: "dune", copiesAvailable: 3 },
  neuromancer: { title: "neuromancer", copiesAvailable: 1 },
  foundation: { title: "foundation", copiesAvailable: 0 },
};

// Schemas
export const BookTitleSchema = z.enum(["dune", "neuromancer", "foundation"]);

export const BookSchema = z.object({
  title: BookTitleSchema,
  copiesAvailable: z.number().int().nonnegative(),
});

export const LoanSchema = z.object({
  loanId: z.number().int().positive(),
  title: BookTitleSchema,
  memberId: z.number().int().positive(),
});

// Types inferred from the schemas
export type Book = z.infer<typeof BookSchema>;
export type Loan = z.infer<typeof LoanSchema>;

export const findBook = (title: unknown): Book => {
  const bookTitle = BookTitleSchema.parse(title);
  return BookSchema.parse(catalogue[bookTitle]);
};

export const checkOutBook = (book: unknown): number => {
  const validBook = BookSchema.parse(book);

  if (validBook.copiesAvailable === 0) {
    throw new Error("No copies available");
  }

  const loanId = Math.floor(Math.random() * 9000) + 1000;

  return loanId;
};

export const registerLoan = (
  loanId: unknown,
  title: unknown,
  memberId: unknown,
): Loan => {
  return LoanSchema.parse({ loanId: loanId, title, memberId });
};

export const borrowBook = (title: unknown, memberId: unknown): Loan => {
  const book = findBook(title);
  const loanId = checkOutBook(book);
  return registerLoan(loanId, title, memberId);
};
