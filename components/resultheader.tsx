export default function ResultHeader(){
    return (
      <div>
        <div data-testid="logo">Logo</div>
        <div>
          <div> location pin icon </div>
          <input placeholder="Location or Postcode"></input>
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