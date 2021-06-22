import { Link } from "react-router-dom";
import logo from "assets/logo512.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>
        Welcome to <br /> the kitten webshop
      </h1>
      <h3>Premium kittens all year around</h3>
      <Link to="/webshop">
        <button>Shop Now</button>
      </Link>
      <p>Now with 90 day money back guarantee*</p>
      <div className="homepage-img-wrapper">
        <img
          src="https://unsplash.com/photos/yMSecCHsIBc/download?force=true&w=1920"
          alt=""
        />
      </div>

      <p>*Not really selling kittens here, this is a dummy webpage</p>
      <p>All images are linked from unsplash</p>
      <p>Made by Pakoszg</p>
      <div className="logo-wrapper">
        <img className="logo" src={logo} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
