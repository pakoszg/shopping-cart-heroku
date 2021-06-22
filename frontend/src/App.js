import HomePage from "./pages/HomePage";
import Webshop from "./pages/Webshop";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import useAddToCart from "./components/useAddToCart";
import WebshopItemSingle from "./components/WebsopItemSingle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
// import { webshopItems } from "./assets/webshopItems";
import "./Sass/App.scss";
import PageNotFound from "pages/PageNotFound";
import useFetch from "components/useFetch";

function App() {
  const {
    handleItems,
    totalQuantity,
    items,
    changeQuantity,
    deleteItem,
    updateTotalPrice,
    updateTotalQuantity,
    totalPrice,
  } = useAddToCart();

  const { webshopItemz } = useFetch();
  console.log(webshopItemz);

  const [showCart, setShowCart] = useState(false);

  function toggleCart() {
    showCart ? setShowCart(false) : setShowCart(true);
  }

  const findWebshopItem = (id) => {
    const item = webshopItemz.find((item) => {
      const itemId = item.id;
      const stringId = itemId.toString();

      console.log(stringId, typeof stringId);
      console.log(id, typeof id);
      console.log(item);

      return stringId === id;
    });
    return item;
  };

  return (
    <Router>
      <div className="App">
        <Navbar totalQuantity={totalQuantity} toggleCart={toggleCart} />
        {showCart ? (
          <Cart
            items={items}
            changeQuantity={changeQuantity}
            toggleCart={toggleCart}
            deleteItem={deleteItem}
            updateTotalPrice={updateTotalPrice}
            updateTotalQuantity={updateTotalQuantity}
            totalQuantity={totalQuantity}
            totalPrice={totalPrice}
            webshopItemz={webshopItemz}
          />
        ) : null}
        <Switch>
          <Route exact path="/shopping-cart">
            <HomePage />
          </Route>
          <Route exact path="/webshop">
            <Webshop handleItems={handleItems} webshopItemz={webshopItemz} />
          </Route>
          <Route
            exact
            path="/:routeName"
            render={(routeProps) => (
              <WebshopItemSingle
                webshopItem={findWebshopItem(routeProps.match.params.routeName)}
                handleItems={handleItems}
                changeQuantity={changeQuantity}
                totalQuantity={totalQuantity}
                updateTotalQuantity={updateTotalQuantity}
                items={items}
              />
            )}
          />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
