import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("Employee Portal main heading is displayed", () => {
  render(<App />);

  const heading = screen.getByRole("heading", {
    name: "Employee Portal",
    level: 1
  });

  expect(heading).toBeDefined();
});
