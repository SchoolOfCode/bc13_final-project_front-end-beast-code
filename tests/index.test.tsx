import LandingHeader from "../components/LandingHeader";
import Hero from "../components/Hero";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<LandingHeader />", () => {
    it("renders the header for the landing page", () => {
      render(<LandingHeader />);
      // check if all components are rendered
      expect(screen.getByTestId("logo")).toBeInTheDocument();
      expect(screen.getByTestId("about-us")).toBeInTheDocument();
      expect(screen.getByTestId("login")).toBeInTheDocument();
    });
});

describe("<Hero />", () => {
  it("renders the hero for the landing page", () => {
    render(<Hero />);
    // check if all components are rendered
    expect(screen.getByTestId("main-container")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("search-container")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});