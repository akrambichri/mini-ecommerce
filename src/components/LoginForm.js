import React from 'react'
import {Link } from "react-router-dom"
import {Form, Input, Icon, Checkbox, Button } from "antd"
import {useDispatch} from "react-redux"
import "./loginForm.css"
import {login} from "../redux/actions/auth"

function LoginForm(props) {
    const { getFieldDecorator } = props.form;
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            dispatch(login({...values}))
            console.log('Received values of form: ', values);
          }
        });
      };

    return (
        <Form onSubmit={handleSubmit} className="login-form" id="normal_login">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Link className="login-form-forgot" to="/forgotPass">
            Forgot password
          </Link>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    )
}

export default Form.create({ name: 'normal_login' })(LoginForm);
