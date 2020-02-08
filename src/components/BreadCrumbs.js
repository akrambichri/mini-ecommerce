import React from "react";
import { Link, useLocation} from "react-router-dom";
import { Breadcrumb } from "antd";
function BreadCrumbs() {
  const location =  useLocation()
  const paths = location.pathname.split("/").filter(s => s != "")
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {paths.map((p,i) =>{
        const path =  paths.slice(0,i+1).reduce((prev,curr) => prev+"/"+curr)
        return (<Breadcrumb.Item key={i}>
          <Link to={`/${path}`}>{p}</Link>
        </Breadcrumb.Item>)
      })}

    </Breadcrumb>
  );
}

export default BreadCrumbs;
