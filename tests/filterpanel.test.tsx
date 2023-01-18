import React from "react";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import FilterPanel from "../components/FilterPanel";
import { filterOptions } from "../data/filters";

describe("FilterPanel", () => {
  it("should render the more filters button and sliding panel", () => {
    const initialFilterOptions = { filters: filterOptions, setDropdown: false, setCheckbox: false };
    const { getByText } = render(<FilterPanel initialFilterOptions={initialFilterOptions} />);

    // Check that the more filters button is rendered
    const moreFiltersButton = getByText("More Filters");
    expect(moreFiltersButton).toBeInTheDocument();

    // Open the sliding panel by clicking the more filters button
    fireEvent.click(moreFiltersButton);

    // Check that the sliding panel is open
    const slidingPane = getByText("Done");
    expect(slidingPane).toBeInTheDocument();

    // Check that the reset button is rendered
    const resetButton = screen.getByTestId("reset-button");
    expect(resetButton).toBeInTheDocument();

    // Check that the filter dropdown is rendered
    const filterDropdown = getByText("value1");
    expect(filterDropdown).toBeInTheDocument();
  });
});