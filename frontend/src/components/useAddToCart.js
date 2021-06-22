import { useState } from "react";

const useAddToCart = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [items, setItems] = useState([]);

  const updateTotalQuantity = () => {
    if (items.length > 0) {
      const total = items
        .map((item) => item.quantity)
        .reduce((acc, curVal) => acc + curVal);

      setTotalQuantity(total);
    } else {
      setTotalQuantity(0);
    }
  };

  const updateTotalPrice = () => {
    if (items.length > 0) {
      const total = items
        .map((item) => item.price * item.quantity)
        .reduce((acc, curVal) => acc + curVal);

      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  };

  const handleItems = (price, name, quantity) => {
    setTotalQuantity(totalQuantity + 1);
    const matchedArray = items.filter((obj) => obj.name === name);
    const [matchedObj] = matchedArray;
    const restArray = items.filter((item) => item.name !== name);

    if (matchedArray.length === 0) {
      setItems((items) => {
        return [
          ...items,
          {
            name: name,
            price: price,
            quantity: quantity || 1,
            id: restArray.length + 1,
          },
        ];
      });
    } else {
      setItems([
        ...(restArray.length !== 0 ? restArray : []),
        {
          name: name,
          price: matchedObj.price,
          quantity: matchedObj.quantity + 1,
          id: matchedObj.id,
        },
      ]);
    }
  };

  const changeQuantity = (name, value) => {
    const item = items.find((item) => item.name === name);
    const restArray = items.filter((item) => item.name !== name);
    if (value > 0) {
      setItems([
        ...(restArray.length !== 0 ? restArray : []),
        {
          name: name,
          price: item.price,
          quantity: value,
          id: item.id,
        },
      ]);
    } else {
      setItems([...(restArray.length !== 0 ? restArray : [])]);
    }
  };

  const deleteItem = (name) => {
    const restArray = items.filter((item) => item.name !== name);
    setItems([...(restArray.length !== 0 ? restArray : [])]);
  };

  return {
    totalQuantity,
    handleItems,
    items,
    changeQuantity,
    deleteItem,
    totalPrice,
    updateTotalPrice,
    updateTotalQuantity,
  };
};

export default useAddToCart;
