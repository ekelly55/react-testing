import { render, screen } from "@testing-library/react";
import mockFetch from "./mocks/mockFetch";
import App from "./App";

test('renders the landing page', async q() => {
  render(<App />);
  
  expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
  expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  expect(await screen.findByRole("option", { name: "husky"})).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
  expect(screen.getByRole("img")).toBeInTheDocument();
});

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
})

afterEach(()=> {
  jest.restoreAllMocks()
});