import Link from "next/link";

export default function ResultsHeader(){
    return (
      <div>
        <div data-testid="logo">
          <Link href="/">Logo</Link>
          </div>
        <div>
          <div data-testid="location-pin"> location pin icon </div>
          <input data-testid="location-input" placeholder="Location or Postcode"></input>
        </div>
        <a href="#" data-testid="about-us">
          About us
        </a>
        <a href="#" data-testid="login">
          Login
        </a>
      </div>
    );
  }