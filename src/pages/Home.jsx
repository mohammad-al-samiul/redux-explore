/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error.message);
      setProducts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
     <div className="grid grid-cols-3 gap-5 p-10">
     {!loading &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
     </div>
    </div>
  );
};

export default Home;
