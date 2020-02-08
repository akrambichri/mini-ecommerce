import React from 'react'
import { Row, Col } from "antd";
import ProductCard from "./ProductCard";

function ProductsGrid({products}) {
    return (
        <Row gutter={[16, 8]}>
      {products
        .map((p, i) => (
          <Col xs={24}  md={12} xl={6} key={i}>
            <ProductCard key={p.id} product={p} />
          </Col>
        ))}
    </Row>
    )
}

export default ProductsGrid
