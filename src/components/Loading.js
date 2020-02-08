import React from "react";
import { Spin, Icon } from "antd";

const antIcon = <Icon  type="loading" style={{ fontSize: 56 }} spin />;

export default () => (
  <div style={{display:"flex",height:"90vh",justifyContent:"center",alignItems:"center",backgroundColor:"#eee"}}>
    <Spin indicator={antIcon} size="large" />
  </div>
);
