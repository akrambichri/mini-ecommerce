import React, { useEffect } from "react";
import { Layout, Menu, Icon } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchMany } from "../redux/actions/resource";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

function SideBar() {
  const categories = useSelector(state => state.resources["categories"]);
  const subcategories = useSelector(state => state.resources["subcategories"]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMany("subcategories"));
    dispatch(fetchMany("categories"));
  }, []);

  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        mode="inline"
        style={{ height: "100%", borderRight: 0 }}
      >
        {(categories || []).map(cat => (
          <SubMenu
            key={cat.id}
            title={
              <span>
                <Icon type={cat.icon} />
                {cat.name}
              </span>
            }
          >
            {(subcategories || [])
              .filter(sc => sc.category_id === cat.id)
              .map(sc => (
                <Menu.Item
                  key={sc.id}
                >
                  <Link to={`/home/${sc.id}`}>{sc.name}</Link>
                </Menu.Item>
              ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
}

export default SideBar;
