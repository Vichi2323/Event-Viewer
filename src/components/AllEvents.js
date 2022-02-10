import React from "react";
import EventsList from "./EventsList";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const AllEvents = () => {
  const { data: myEvents, isLoading, error } = useFetch(
    "http://localhost:8000/myEvents"
  );
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addnewevent");
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {myEvents && <EventsList myEvents={myEvents} title="All events" />}
      <button onClick={handleClick}>Add New Event</button>
    </div>
  );
};

export default AllEvents;
