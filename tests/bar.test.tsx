import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import BarPageInfo from "../components/Barpage";

describe("<BarPageInfo/>", () => {
    it("renders the barpage components", () => {
      render(<BarPageInfo />);
      // check if all components are rendered
      expect(screen.getByTestId("bar-page-image")).toBeInTheDocument();
      expect(screen.getByTestId("name-of-bar")).toBeInTheDocument();
      expect(screen.getByTestId("bar-description")).toBeInTheDocument();
      expect(screen.getByTestId("icon-bar-page")).toBeInTheDocument();
      expect(screen.getByTestId("icon-description-bar-page")).toBeInTheDocument();
    });
});