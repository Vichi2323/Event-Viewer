import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogInForm = ({ onLoginUpdate }) => {
  const getUser = () => {
    const user = localStorage.getItem("user");
    if (user !== "undefined") return JSON.parse(user);
    else return "";
  };

  const setUserStorage = (token) => {
    localStorage.setItem("token", token);
  };

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const registredUser = getUser();

  const checkAuth = () => {
    if (
      user.userName === registredUser.userName &&
      user.password === registredUser.password
    ) {
      setUserStorage("1234");
      navigate("/allevents");
    } else {
      alert("invalid user");
    }
  };

  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={() => {
          checkAuth();
          onLoginUpdate(true);
        }}
      >
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={user.userName}
          onChange={(e) => {
            setUser({
              ...user,
              userName: e.target.value,
            });
          }}
        />
        <label>Password</label>
        <input
          type="Password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
        <label></label>
        <input type="Submit" />
      </form>
    </div>
  );
};

export default LogInForm;
