import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const setUserStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const RegisterForm = ({ onLoginUpdate }) => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      user.name === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.userName === "" ||
      user.password === "" ||
      user.phone === ""
    ) {
      setError(true);
    } else {
      navigate("/login");

      setError(false);
    }
    setUserStorage(user);
    onLoginUpdate(true);
  };
  const errorMessage = () => {
    return (
      <div
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>User {user.name} Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div>
      <h1>Register Form</h1>

      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <label>Last Name</label>
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={user.lastName}
          onChange={(e) =>
            setUser({
              ...user,
              lastName: e.target.value,
            })
          }
        />

        <label>Username</label>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={user.userName}
          onChange={(e) =>
            setUser({
              ...user,
              userName: e.target.value,
            })
          }
        />

        <label>Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />

        <label>Phone</label>
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          value={user.phone}
          onChange={(e) => {
            setUser({
              ...user,
              phone: e.target.value,
            });
          }}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
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
        <input type="submit" onClick={handleFormSubmit} value="Submit" />
      </form>

      <div>{errorMessage()}</div>
    </div>
  );
};

export default RegisterForm;
