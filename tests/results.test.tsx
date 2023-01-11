import ResultCard from "../components/ResultCard";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

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