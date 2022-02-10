import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import LogInForm from "./components/LogInForm";
import RegisterForm from "./components/RegisterForm";
import AddNewEvent from "./components/AddNewEvent";
import EditEvent from "./components/EditEvent";
import AllEvents from "./components/AllEvents";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import { useState } from "react";
import EventDetails from "./components/EventDetails";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="container">
      <h1>
        <a className="ancor" href="/">
          Event Viewer
        </a>
      </h1>

      <Navbar className="navbar" />
      <Routes>
        {/* Routes before login */}

        <Route
          path="/login"
          element={<LogInForm onLoginUpdate={setIsLoggedIn} />}
        />
        <Route
          path="/register"
          element={<RegisterForm onLoginUpdate={setIsLoggedIn} />}
        />

        {/* Routes after login */}
        {isLoggedIn && (
          <>
            <Route path="/addnewevent" element={<AddNewEvent />} />
            <Route path="/editevent/:id" element={<EditEvent />} />
            <Route path="/allevents" element={<AllEvents />} />
            <Route path="/myEvents/:id" element={<EventDetails />} />
          </>
        )}
        {/* Routes for everyone */}

        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} onLoginUpdate={setIsLoggedIn} />
          }
        />
        <Route path=":pageName" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
function Navbar() {
  return (
    <div className="navbar">
      <Link className="links" to="login">
        Login
      </Link>
      <Link className="links" to="register">
        Register
      </Link>
    </div>
  );
}
export default App;
