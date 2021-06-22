import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { decimalNumber } from "../utils";
import { FaCat } from "react-icons/fa";

const Cart = ({
  items,
  toggleCart,
  changeQuantity,
  deleteItem,
  totalQuantity,
  updateTotalQuantity,
  totalPrice,
  updateTotalPrice,
  webshopItems,
}) => {
  const sortedItems = items.sort(function sortObjects(a, b) {
    return a.id - b.id;
  });

  const [meow, setMeow] = useState(false);

  const findWebshopItem = (name) =>
    webshopItems.find((item) => item.name === name);

  useEffect(() => {
    updateTotalQuantity();
  }, [totalQuantity, updateTotalQuantity]);

  useEffect(() => {
    updateTotalPrice();
  });

  // individually styled to match the cart items
  const cartListHeader = (
    <div className="cart-item cart-item-header">
      <div
        style={{
          maxWidth: "60px",
          maxHeight: "60px",
        }}
      ></div>
      <p>Name</p>
      <p
        style={{
          maxWidth: "84px",
          width: "84px",
          margin: "0px",
          textAlign: "center",
        }}
      >
        Quantity
      </p>
      <p>Price/piece</p>
      <p>Total Price</p>
      <p
        className="icon"
        style={{ maxWidth: "30px", width: "30px", margin: "0px" }}
      ></p>
    </div>
  );

  const cartList = sortedItems.map((obj) => {
    const route = findWebshopItem(obj.name).routeName;
    const url = findWebshopItem(obj.name).url;
    const total = obj.price * obj.quantity;
    return (
      <div className="cart-item">
        <img className="cart-image" src={url} alt="" />
        <p>
          <Link
            to={`/shop/${route}`}
            className="cart-item-name"
            onClick={() => toggleCart()}
          >
            {obj.name}
          </Link>
        </p>
        <AiFillMinusCircle
          className="icon"
          onClick={() => changeQuantity(obj.name, obj.quantity - 1)}
        />
        <input
          type="text"
          value={obj.quantity}
          onChange={(e) => {
            if (isNaN(e.target.value)) {
              alert("Please enter a number");
            } else {
              changeQuantity(obj.name, Number(e.target.value));
            }
          }}
        />
        <AiFillPlusCircle
          className="icon"
          onClick={() => changeQuantity(obj.name, obj.quantity + 1)}
        />
        {console.log(obj.price)}
        <p className="cart-price">
          ${obj.price ? decimalNumber(obj.price) : null}
        </p>
        <p>${total ? decimalNumber(total) : null}</p>
        <TiDelete className="icon" onClick={() => deleteItem(obj.name)} />
      </div>
    );
  });

  const cartListEmpty = (
    <p className="cart-list-empty">
      The cart is empty
      <FaCat
        id="cat-icon"
        onMouseEnter={() => setMeow(true)}
        onMouseLeave={() => setMeow(false)}
        style={{ margin: "10px" }}
      />
      {meow ? <p className="meow">MEOW!!</p> : <p> </p>}
    </p>
  );

  return (
    <div className="cart">
      <div className="cart-wrapper">
        <h1>Shopping Cart</h1>
        <div className="cart-items-wrapper">
          {totalQuantity === 0 ? null : cartListHeader}
          {totalQuantity === 0 ? cartListEmpty : cartList}
        </div>

        <p className="totalPrice">
          Grand Total: ${totalPrice ? decimalNumber(totalPrice) : 0}
        </p>
        <Link to="/checkout">
          <button onClick={() => toggleCart()}>Checkout</button>
        </Link>

        <button onClick={() => toggleCart()}>Close Cart</button>
      </div>
    </div>
  );
};

export default Cart;
