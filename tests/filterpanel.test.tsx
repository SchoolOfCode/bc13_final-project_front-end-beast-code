import React from "react";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
//import FilterPanel from "../components/FilterPanel";
import { filterOptions } from "../data/filters";
import FilterDropdown from "../components/FilterDropdown";
import ResultsSearchSection from "../components/ResultsSearchSection";


describe("FilterPanel", () => {
  it("should render the more filters button", () => {
    const initialFilterOptions = { filters: filterOptions, setDropdown: false, setCheckbox: false };
    const { getByText } = render(<ResultsSearchSection filters={filterOptions} setDropdown={function (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } setCheckbox={function (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } results={[]} getFilteredData={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } heroPageQuery={{
      location: [],
      searchInputPlaceholder: ""
    }} queryFilters={[]} resetResults={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } getQueryInput={function (event: React.ChangeEvent<HTMLInputElement>): void {
      throw new Error("Function not implemented.");
    } } queryInput={""} removeOption={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } />);
    // Check that the more filters button is rendered
    const moreFiltersButton = getByText("More Filters");
    expect(moreFiltersButton).toBeInTheDocument();
  })
});


describe('FilterPanel', () => {
  it('calls setState when the "More Filters" button is clicked', () => {
    const setDropdown = jest.fn()
    const setCheckbox = jest.fn()
    const { getByTestId } = render(<ResultsSearchSection filters={filterOptions} setDropdown={setDropdown} setCheckbox={setCheckbox} results={[]} getFilteredData={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } heroPageQuery={{
      location: [],
      searchInputPlaceholder: ""
    }} queryFilters={[]} resetResults={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } getQueryInput={function (event: React.ChangeEvent<HTMLInputElement>): void {
      throw new Error("Function not implemented.");
    } } queryInput={""} removeOption={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } />)
    const moreFiltersButton = getByTestId('more-filters')
    fireEvent.click(moreFiltersButton)
    expect(screen.getByText('Done')).toBeInTheDocument()
  })
})