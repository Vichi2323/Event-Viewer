import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const EditEvent = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const [myEvent, setMyEvent] = useState({
    eventName: "",
    eventDate: "",
    eventDescription: "",
    id: "",
  });

  const getEvent = () => {
    fetch(`http://localhost:8000/myEvents/${id}`)
      .then((res) => res.json())
      .then((data) => setMyEvent(data));
  };
  console.log(myEvent);

  useEffect(() => {
    getEvent();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/myEvents/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myEvent),
    })
      .then(console.log("success"))
      .catch((err) => console.error(err));
    console.log(JSON.stringify(myEvent));
    navigate("/allevents");
  };

  return (
    <div>
      <h1>Edit Event</h1>

      <form onSubmit={handleSubmit}>
        <label>Event Name</label>
        <input
          type="text"
          required
          value={myEvent.eventName}
          onChange={(e) =>
            setMyEvent({ ...myEvent, eventName: e.target.value })
          }
        />
        <label>Event Date</label>
        <input
          type="text"
          required
          value={myEvent.eventDate}
          onChange={(e) =>
            setMyEvent({ ...myEvent, eventDate: e.target.value })
          }
        />
        <label>Event Description:</label>
        <textarea
          required
          value={myEvent.eventDescription}
          onChange={(e) =>
            setMyEvent({ ...myEvent, eventDescription: e.target.value })
          }
        ></textarea>
        <button>Edit event</button>
      </form>
    </div>
  );
};

export default EditEvent;
