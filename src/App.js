import React from "react";
import "./App.css";
import Routes from "./components/Routes";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Provider from "./redux";
import {useDispatch} from "react-redux"
import {fetchUser} from "./redux/actions/auth"
function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  if(token){
    dispatch(fetchUser(token))
  }
  return (
      <Router>
        <Layout>
          <Navbar />
          <Routes />
        </Layout>
      </Router>
  );
}

export default ()=>(<Provider><App/></Provider>);
