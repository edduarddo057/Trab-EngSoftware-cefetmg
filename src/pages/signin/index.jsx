import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({ email: "", password: "" });

  const handleSubtmit = async e => {
    e.preventDefault();

    await signin(userLogin.email, userLogin.password);

    navigate("/home");
  };

  return (
    <div className="SigninContainer">
      <Form onSubmit={handleSubtmit} className="SigninContent">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={userLogin.email}
            onChange={e =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={userLogin.password}
            onChange={e =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signin;
