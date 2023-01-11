import ResultsHeader from "../components/ResultsHeader";
import ResultCard from "../components/ResultCard";
import FilterPanel from "../components/FilterPanel";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<ResultsHeader />", () => {
    it("renders the header for the results page", () => {
      render(<ResultsHeader />);
      // check if all components are rendered
      expect(screen.getByTestId("logo")).toBeInTheDocument();
      expect(screen.getByTestId("about-us")).toBeInTheDocument();
      expect(screen.getByTestId("login")).toBeInTheDocument();
      expect(screen.getByTestId("location-pin")).toBeInTheDocument();
      expect(screen.getByTestId("location-input")).toBeInTheDocument();
      });
});

describe("<ResultCard />", () => {
    it("renders the header for the individual bar card on results page", () => {
      render(<ResultCard />);
      // check if all components are rendered
      expect(screen.getByTestId("image")).toBeInTheDocument();
      expect(screen.getByTestId("title")).toBeInTheDocument();
      expect(screen.getByTestId("container")).toBeInTheDocument();
      expect(screen.getByTestId("unordered-list")).toBeInTheDocument();
      expect(screen.getByTestId("list-item")).toBeInTheDocument();
      expect(screen.getByTestId("text")).toBeInTheDocument();
      expect(screen.getByTestId("icon")).toBeInTheDocument();
    });
});

describe("<FilterPanel />", () => {
  it("renders the advanced filter panel on results page", () => {
    render(<FilterPanel />);
    // check if all components are rendered
    expect(screen.getByTestId("reset-button")).toBeInTheDocument();
    expect(screen.getByTestId("done-button")).toBeInTheDocument();
  });
});