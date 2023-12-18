// LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form } from "react-bootstrap";
import { login, putAccessToken } from "../utils/network";
import { Button } from "react-bootstrap";
import FormLoginAndRegis from "../components/FormLoginRegis";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();

    login({ username, password }).then((response) => {
      console.log(response.data);

      if (!response.error) {
        putAccessToken(response?.data?.token);
        alert(`Welcome ${username}`);
        navigate("/");
      } else {
        alert("Failed: Incorrect Email/Password!");
      }
    });
  }

  const onRegisterHandler = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        
          <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Login User</h1>

          <FormLoginAndRegis
            onSubmit={onSubmitHandler}
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            isSubmitDisabled={!username || !password}
          />

          {/* Navigate Register */}
          <div className="text-center mt-4">
            <Form.Text className="text-gray-600">Don't have an account?</Form.Text>
            <Button variant="link" className="text-purple-500" onClick={onRegisterHandler}>
              <u>Register</u>
            </Button>
          </div>
        
      </div>
    </div>
  );
}

export default LoginPage;