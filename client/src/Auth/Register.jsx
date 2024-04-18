import React from "react";
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from "antd";
import { Link } from "react-router-dom";
import registerImage from "../Assets/Register.png";
import useSignup from "../hooks/useSignup";

const Register = () => {
  const {loading, error, registerUser} =useSignup();
  const handleregister = (values) => {
    registerUser(values);
    
   
  };
  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        {/* Form */}
        <Flex vertical flex={1} >
          <Typography.Title level={3} strong className="title" align="center">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan" align="center">
            Join for exclusive access!
          </Typography.Text>
          <Form layout="vertical" onFinish={handleregister} autoComplete="off">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your full name!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your full name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your Email!",
                },
                {
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your Password!",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter your Password" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "Please enter your Confirm Password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-Enter your Password"
              />
            </Form.Item>
            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}
            <Form.Item>
              <Button
                type={`${loading ? '' : 'primary'}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {loading ? <Spin/> : 'Create Account'}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button size="large" className="btn">
                  Sign in
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
        {/* Image */}
        <Flex flex={1}>
          <img className="auth-image" src={registerImage} alt="" />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
