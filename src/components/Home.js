import React from "react";
import AllEvents from "./AllEvents";
import LogInForm from "./LogInForm";

const Home = ({ isLoggedIn, onLoginUpdate }) => {
  return (
    <div>
      <>
        {isLoggedIn ? (
          <LogInForm onLoginUpdate={onLoginUpdate} />
        ) : (
          <AllEvents />
        )}
      </>
    </div>
  );
};

export default Home;
