import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultsHeader from '../components/ResultsHeader';
import styles from '../styles/ResultsHeader.module.css';


describe('ResultsHeader', () => {
  it('should render the logo with the correct attributes', () => {
    render(<ResultsHeader />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass(styles.logo);
    const logoImage = screen.getByAltText('logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/_next/image?url=%2FLogo.png&w=64&q=75');
    expect(logoImage).toHaveAttribute('width', '32');
    expect(logoImage).toHaveAttribute('height', '32');
    expect(logoImage).toHaveClass(styles.logo_icon);
  });

  it('should render the location input with the correct attributes', () => {
    render(<ResultsHeader />);
    const locationInput = screen.getByTestId('location-input');
    expect(locationInput).toBeInTheDocument();
    expect(locationInput).toHaveAttribute('placeholder', 'Location or Postcode');
    expect(locationInput).toHaveClass(styles.location_input);
  });

  it('should render the about us and login links with the correct attributes', () => {
    render(<ResultsHeader />);

    const loginLink = screen.getByTestId('login');
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute('href', '#');
  });
});