import React from 'react';
import { Col, Row, Button, Badge } from 'antd';
import {useDispatch} from "react-redux"
import {updateItemUnits,deleteFromCart} from "../redux/actions/cart"

function CartItem({item }) {
    const dispatch = useDispatch()
    const _onAddUnit = () => {
        dispatch(updateItemUnits({id:item.id, units:1}))
    }
    const _onDeductUnit = () => {
        dispatch(updateItemUnits({id:item.id, units:-1}))
    }
    return (
            <Row>
                <Col xs={12}>
                    <h5>{item.name} <Badge >Price: MAD {item.price}</Badge></h5>
                </Col>
                <Col xs={6} >
                    <p>units :&nbsp;
                            <p bsStyle='success'> {item.units} </p>
                        &nbsp;
                            <Button size='small' onClick={_onAddUnit}>+</Button>
                        <Button size='small' onClick={_onDeductUnit}>-</Button>
                    </p>
                </Col>
                <Col xs={6} >
                    <Button onClick={() => dispatch(deleteFromCart({id:item.id}))}
                        size="default" type='danger'>Remove</Button>
                </Col>
            </Row>
    )
}

export default CartItem
