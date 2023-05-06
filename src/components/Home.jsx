import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./styles.css";
import Filters from "./Filters";

const Home = () => {
  const {
    state: { products },
    productState: { byStock, sort, byFastDelivery, byRating, searchQuery },
  } = CartState();

  console.log(products);

  const transFormProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((e) => e.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((e) => e.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((e) => e.ratings >= byRating);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((e) =>
        e.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transFormProducts().map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
