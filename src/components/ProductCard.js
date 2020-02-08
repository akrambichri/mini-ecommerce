import React from "react";
import { Card, Icon } from "antd";
import { useHistory } from "react-router-dom";
import { addToCart } from "../redux/actions/cart";
import { useDispatch } from "react-redux";

const { Meta } = Card;

function ProductCard({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {
            history.push(`/home/${product.subcategory_id}/${product.id}`);
            
          }}
          alt="example"
          src={"http://lorempixel.com/300/250/fashion?" + product.id}
        />
      }
      actions={[
        <Icon
          onClick={() => alert("icon heart")}
          type="heart"
          key="heart"
          style={{ fontSize: 26, color: "red", cursor: "pointer" }}
        />,
        <Icon
          onClick={() => dispatch(addToCart(product))}
          type="shopping-cart"
          key="cart"
          style={{ fontSize: 26, color: "blue", cursor: "pointer" }}
        />
      ]}
    >
      <Meta title={product.name} description={product.price + " DH"} />
    </Card>
  );
}

export default ProductCard;
