// Here you write the test cases
// How to write the Test cases? AAA
// Arrange
import { render, screen } from "@testing-library/react";
import CompanyInfo from "./CompanyInfo";

// test suite = group of related test specs
describe('CompanyInfo', () => {
  // test spec #1
  // Testing JSX
  it("has right heading", () => {
    // Act
    render(<CompanyInfo />);
    const headingElement = screen.getByText(
      "Testing JSX, Props, States, Events, Styles and Snapshot Demo!"
    );

    // Assert
    expect(headingElement).toBeInTheDocument();
  });

  // test spec #2
  it("has Company Info text", () => {
    render(<CompanyInfo />);

    // using reg exp pattern
    const companyInfoText = screen.getByText(/company info/i); // i stands for case-insensitive
    expect(companyInfoText).toBeInTheDocument();
  });

  it("should have Cognizant as company name", () => {
    render(<CompanyInfo />);
    const companyName = screen.getByTestId("companyName"); // give last preference to getByTestId
    expect(companyName.textContent).toBe("Company Name: Cognizant");
  });

  // Testing Props -- must in all places where you receive props in any project
  it("receives foundedYear prop and displays in JSX", () => {
    render(<CompanyInfo foundedYear="2001" />);
    const foundedYear = screen.getByTestId("foundedYear");
    expect(foundedYear.textContent).toBe("The Company Founded in: 2001");
  });

  // TODO: Testing Props -- headquarters = Teaneck, New Jersey, U.S
  // In browser I want the output to be 'Headquarters: Teaneck, New Jersey, U.S'
});
