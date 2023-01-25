import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultsHeader from '../components/ResultsHeader';
import styles from '../styles/ResultsHeader.module.css';
import mockRouter from 'next-router-mock'


jest.mock('next/router', () => require('next-router-mock'))

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/results',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));
describe('ResultsHeader', () => {

it('should render the logo with the correct attributes', () => {
  render(<ResultsHeader setLocation={undefined} location={undefined}/>)
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
  const placeHolderText = 'Location or Postcode'
  render(<ResultsHeader placeholder={placeHolderText} location={'Location or Postcode'} />)
  const locationInput = screen.getByTestId('location-input');
  expect(locationInput).toBeInTheDocument();
  //expect(locationInput).toHaveAttribute('placeholder', 'Location or Postcode')
  expect(locationInput).toHaveClass(styles.location_input);
});

it('should render the about us and login links with the correct attributes', () => {
  render(<ResultsHeader setLocation={undefined} location={undefined} href="#" />);
  

  const aboutUsLink = screen.getByTestId('about-us');
  expect(aboutUsLink).toBeInTheDocument();
  expect(aboutUsLink).toHaveAttribute('href', '/aboutus');

  const loginLink = screen.getByTestId('login');
  expect(loginLink).toBeInTheDocument();
  expect(loginLink).toHaveAttribute('href', '/underconstruction');
});
});
