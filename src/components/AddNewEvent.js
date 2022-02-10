import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myEvent = { eventName, eventDate, eventDescription };
    fetch("http://localhost:8000/myEvents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myEvent),
    }).then(() => {
      navigate("/allevents");
    });
  };

  return (
    <div>
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit}>
        <label>Event Name</label>
        <input
          type="text"
          required
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <label>Event Date</label>
        <input
          type="text"
          required
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <label>Event Description:</label>
        <textarea
          required
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        ></textarea>
        <button>Add event</button>
      </form>
    </div>
  );
};

export default AddNewEvent;
