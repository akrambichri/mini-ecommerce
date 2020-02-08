import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import { fetchMany } from "../../redux/actions/resource";
import ProductsGrid from "../../components/ProductsGrid";

function Featured() {
  const isLoading = useSelector(state => state.isLoading);
  const products = useSelector(state => state.resources["products"] || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMany("products"));
  }, []);

  if (isLoading) return <Loading />;
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Featured</h1>
      <ProductsGrid products={products.slice(0, 8)} />
    </>
  );
}

export default Featured;
