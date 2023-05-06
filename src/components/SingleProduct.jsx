import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>Rs: {product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>1 week Delivery</div>
            )}
            <Rating rating={product.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === product.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              {" "}
              Remove from cart
            </Button>
          ) : (
            <Button
              disabled={!product.inStock}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
            >
              {" "}
              {!product.isStock ? "Add to cart" : "Out of stock"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
