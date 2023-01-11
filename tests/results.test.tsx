import ResultsHeader from "../components/ResultsHeader";
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