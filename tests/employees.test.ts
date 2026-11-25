import { beforeEach, describe, expect, it } from "vitest";
import request from "supertest";
import { z } from "zod";
import { createApp } from "../src/app";
import { EmployeeSchema } from "../src/schemas";

let app: ReturnType<typeof createApp>;

beforeEach(() => {
  app = createApp();
});

const hanna = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  role: "HEAD_WAITER",
};

describe("GET /app/employees", () => {
  it("should return a list of employees", async () => {
    const res = await request(app).get("/api/employees");
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(() => z.array(EmployeeSchema).parse(res.body)).not.toThrow();
  });
});
