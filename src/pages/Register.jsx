import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network";
import FormLoginAndRegis from "../components/FormLoginRegis";

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    register({ username, password }).then((response) => {
      if (!response.error) {
        alert("Success! Please login");
        console.log(`Successfully created a new account! username: ${username}, password: ${password} `);
        navigate("/login");
      } else {
        alert("Failed to create an account!");
      }
    });
  };

  const onLoginHandler = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
      <div className="bg-light p-5 d-flex justify-content-center align-item-center">
        <div className="bg-violet-300 shadow-lg rounded-lg p-4 max-w-md w-full ">
          <h1 className="text-2xl font-bold text-center text-slate-700 mb-7">Register User</h1>

          {/* FormLoginAndRegis component */}
          <FormLoginAndRegis
            onSubmit={onSubmitHandler}
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            isSubmitDisabled={!username || !password}
          />

          {/* Navigate to Login */}
          <div className="text-center mt-3">
            <p className="text-muted">Already have an account?</p>
            <button
              className="text-blue-500 underline"
              onClick={onLoginHandler}
            >
              Login
            </button>
          </div>
        </div>
      </div>
  );
}

export default RegisterPage;