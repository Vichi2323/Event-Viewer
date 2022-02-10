import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: myEvent } = useFetch("http://localhost:8000/myEvents/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/myEvents/" + myEvent.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/allevents");
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    navigate("/editevent/" + id);
  };

  return (
    <div>
      {myEvent && (
        <article>
          <h2>{myEvent.eventName}</h2>
          <div>{myEvent.eventDescription}</div>
          <button onClick={handleClick}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </article>
      )}
    </div>
  );
};

export default EventDetails;

// const handleSubmit = (e) => {
//   e.preventDefault()

//   fetch(`https://gorest.co.in/public/v1/users/${id}`, {
//       method: "PUT",
//       headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer ad8714443f89fc1ae425863402fe9be7050f92bfabc21f6a3f3013e515e27006"
//       },
//       body: JSON.stringify({
//           id: id,
//           name: name,
//           email: email,
//           gender: gender
//       })
//   }).then(() => {
//       console.log(JSON.stringify())
//   })

//
