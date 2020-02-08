import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Layout, Menu, Badge, Icon } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";

const { Header } = Layout;

function Navbar() {
  const user = useSelector(state => state.auth.user);
  const cartLength = useSelector(state => state.cart.length)
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const _logout = () => {
    history.push("/login");
    dispatch(logout());
  };
  const getSelectedNavKey = () => {
    if (location.pathname.includes("/home")) return ["home"];
    else if (location.pathname.includes("/login")) return ["login"];
    else if (location.pathname.includes("/cart")) return ["cart"];
  };
  console.log(location);
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={getSelectedNavKey()}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="home">
          <Link to="/home">Home</Link>
        </Menu.Item>
        {user ? (
          <Menu.Item key="login" onClick={_logout} style={{color:"red"}}>
            logout
          </Menu.Item>
        ) : (
          <Menu.Item key="login">
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}
        <Menu.Item key="cart">
        <Link to="/cart">
          <Badge count={cartLength}><Icon type="shopping-cart" style={{fontSize:21}}/></Badge>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
