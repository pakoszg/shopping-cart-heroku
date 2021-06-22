import { Link } from "react-router-dom";
import { decimalNumber } from "../utils";

const WebshopItemSingle = ({ items, webshopItem, handleItems }) => {
  console.log(webshopItem);
  const { name, url, price } = webshopItem;

  const thisItem = items.find((item) => item.name === name);
  console.log(thisItem);

  return (
    <div className="single-item-wrapper">
      <h1>{name}</h1>
      <div className="single-item-properties">
        <img src={url} alt="" />

        <h2>Price: ${price ? decimalNumber(price) : null}</h2>
        {thisItem !== undefined ? (
          <h3>Quantity: {thisItem.quantity}</h3>
        ) : (
          <h3>Quantity: 0</h3>
        )}

        <button onClick={() => handleItems(price, name)}>Add to Cart</button>
        <Link className="go-back" to="/webshop">
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default WebshopItemSingle;
