import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("Employee Portal heading is displayed", () => {
  render(<App />);

  expect(screen.getByText("Employee Portal")).toBeDefined();
});