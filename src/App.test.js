import { render, screen } from "@testing-library/react";
import mockFetch from "./mocks/mockFetch";
import App from "./App";

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
})

afterEach(()=> {
  jest.restoreAllMocks()
});