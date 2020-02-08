import React from 'react'
import {Icon } from "antd"
function N404() {
    return (
        <div style={styles.centeredDiv}>
        404, Page not Found ! &nbsp;  <Icon type="warning" style={{fontSize:36, color:"black"}}/>
        </div>
    )
}

const styles = {
    centeredDiv:{
        display:"flex",
        width:"100%",
        height:"100vh",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"24px"
    }
}
export default N404
