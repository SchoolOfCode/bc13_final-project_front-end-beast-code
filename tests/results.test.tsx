import ResultsHeader from "../components/ResultsHeader";
import ResultCard from "../components/ResultCard";
import FilterPanel from "../components/FilterPanel";
import "@testing-library/jest-dom";
import FilterDropdown from "../components/FilterDropdown"
import ResultsSearchSection from "../components/ResultsSearchSection";
import { fireEvent, getByTestId, getByText, render, screen } from "@testing-library/react";

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
      render(<ResultCard key="key" name="name" cost={1} description="descroption"/>);
      // check if all components are rendered 
      //expect(screen.getByTestId("image")).toBeInTheDocument();
      expect(screen.getByTestId("title")).toBeInTheDocument();
      expect(screen.getByTestId("container")).toBeInTheDocument();
      expect(screen.getByTestId("unordered-list")).toBeInTheDocument();
      expect(screen.getByTestId("list-item")).toBeInTheDocument();
      expect(screen.getByTestId("text")).toBeInTheDocument();
      expect(screen.getByTestId("icon")).toBeInTheDocument();
    });
});

describe("<ResultsSearchSection />", () => {
  it("renders the advanced filter panel on results page", () => {
    render(<ResultsSearchSection />);
    // check if all components are rendered
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });
});

// describe("<FilterDropdown />", () => {
//   it("renders the filter dropdown with checkbox options on results page", () => {
//     render(<FilterDropdown />);
//     // check if all components are rendered
//     // expect(screen.getByTestId("unordered-list")).toBeInTheDocument();
//     // expect(screen.getByTestId("list-item")).toBeInTheDocument();
//     // expect(screen.getByTestId("option-text")).toBeInTheDocument();
//   });
// });

describe("<FilterPanel />", () => {
  it("popover filter panel is initially hidden", () => {
    const { getByTestId } = render(<FilterPanel />);
    render(<FilterDropdown/>);
    fireEvent.click(getByTestId("more-filters"))
    expect("Done").toBeInTheDocument();
    expect("Done").toBeVisible();
  })
})
