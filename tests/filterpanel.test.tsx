import React from "react";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import FilterPanel from "../components/FilterPanel";
import { filterOptions } from "../data/filters";



describe("FilterPanel", () => {
  it("should render the more filters button", () => {
    const initialFilterOptions = { filters: filterOptions, setDropdown: false, setCheckbox: false };
    const { getByText } = render(<FilterPanel initialFilterOptions={initialFilterOptions} />);

    // Check that the more filters button is rendered
    const moreFiltersButton = getByText("More Filters");
    expect(moreFiltersButton).toBeInTheDocument();
  })
});


describe('FilterPanel', () => {
  it('calls setState when the "More Filters" button is clicked', () => {
    const setDropdown = jest.fn()
    const setCheckbox = jest.fn()
    const { getByTestId } = render(<FilterPanel filters={filterOptions} setDropdown={setDropdown} setCheckbox={setCheckbox} />)
    const moreFiltersButton = getByTestId('more-filters')
    fireEvent.click(moreFiltersButton)
    expect(screen.getByText('Done')).toBeInTheDocument()
  })
})