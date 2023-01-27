import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  it("renders the footer for every page", () => {
    render(<Footer />);
    // check if all components are rendered
    expect(screen.getByTestId("Contact-us")).toBeInTheDocument();
    expect(screen.getByTestId("Submit Button")).toBeInTheDocument();
    expect(screen.getByTestId("icon-insta")).toBeInTheDocument();
  });
});
