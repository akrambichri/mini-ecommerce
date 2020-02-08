import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { fetchMany } from "../../redux/actions/resource";
import ProductsGrid from "../../components/ProductsGrid";

function Subcat() {
  const { sub_id } = useParams();
  const isLoading = useSelector(state => state.isLoading);
  const products = useSelector(state => state.resources["products"] || []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMany("products"));
  }, [sub_id]);

  if (isLoading) return <Loading />;
  return (
    <ProductsGrid products={products.filter(p => p.subcategory_id === sub_id)} />
  );
}

export default Subcat;
