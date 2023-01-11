import LandingHeader from "../components/LandingHeader";
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