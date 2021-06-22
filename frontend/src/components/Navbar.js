import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ totalQuantity, toggleCart }) => {
  console.log();
  console.log(totalQuantity);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/shopping-cart">Home</Link>
        <Link to="/webshop">Webshop</Link>
        <div className="sticker-background"></div>
        <span class="fa-stack">
          <FontAwesomeIcon
            className="fa fa-stack-2x sticker-icon"
            icon={faShoppingBag}
            onClick={() => toggleCart()}
          />
          <strong
            onClick={() => toggleCart()}
            className="fa-stack-1x sticker-number"
          >
            {totalQuantity}
          </strong>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
