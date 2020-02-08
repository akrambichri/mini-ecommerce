import React, { useEffect } from "react";
import { List, Skeleton, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";

function Cart() {
  const cartItems = useSelector(state => state.cart);
  const total =
    cartItems.length > 0
      ? cartItems
          .map(item => item.price * item.units)
          .reduce((prev, curr) => prev + curr)
      : 0;
  if (cartItems.length === 0) {
    return <div> Empty !</div>;
  }
  return (
    <div style={styles.container}>
      {cartItems.map(item => (
        <CartItem item={item} />
      ))}
      <p>total : {total}</p>
      <Button type="primary" size="large">
        {" "}
        Checkout{" "}
      </Button>
    </div>
  );
}

const styles = {
  container: {
    borderColor: "#000",
    borderWidth: "1px",
    margin: "auto"
  }
};

export default Cart;
