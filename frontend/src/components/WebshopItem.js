import { Link } from "react-router-dom";
import path from "path";
import testFile from "../assets/testFile.jpeg";

const WebshopItem = ({ handleItems, name, price, image, id }) => {
  const url = path.join("../../backend/public", `${image.url}`);

  return (
    <div className="item-wrapper">
      <div className="item">
        <Link to={`/${id}`}>
          <div className="item-img-wrapper-outer">
            <div className="item-img-wrapper">
              <img src={testFile} alt="" />
            </div>
          </div>
        </Link>
        <Link to={`/${id}`}>
          <h3 className="item-name">{name}</h3>
        </Link>
        <p>Price: ${price}</p>
        <button onClick={() => handleItems(price, name)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default WebshopItem;
