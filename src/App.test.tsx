import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio heading", () => {
  render(<App />);
  expect(screen.getByText("Trent Taylor")).toBeInTheDocument();
});
