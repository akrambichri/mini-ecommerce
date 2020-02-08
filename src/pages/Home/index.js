import React, { lazy, useEffect, Suspense } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Row, Col } from "antd";
import Loading from "../../components/Loading";
import SideBar from "../../components/SideBar";
import BreadCrumbs from "../../components/BreadCrumbs";
import { fetchMany } from "../../redux/actions/resource";

const { Content } = Layout;

function Home(props) {
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMany("products"));
  }, []);

  const Featured = lazy(() => import("./Featured"));
  const Subcat = lazy(() => import("./Subcat"));
  const ProductDetails = lazy(() => import("./ProductDetails"));
  if (isLoading) return <Loading />;
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <SideBar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <BreadCrumbs />
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Route exact path="/home">
              <Featured />
            </Route>
            <Route exact path="/home/:sub_id">
              <Subcat />
            </Route>
            <Route path="/home/:sub_id/:id">
              <ProductDetails />
            </Route>
          </Content>
        </Layout>
      </Layout>
    </Suspense>
  );
}

export default Home;
