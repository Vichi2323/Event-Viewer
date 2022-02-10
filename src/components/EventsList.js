import React from "react";
import { Link } from "react-router-dom";

const EventsList = ({ myEvents, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {myEvents.map((myEvent) => (
        <div key={myEvent.id}>
          <table>
            <tr>
              <Link className="links" to={`/myEvents/${myEvent.id}`}>
                {" "}
                <th>{myEvent.eventName}</th>
              </Link>
            </tr>
            <tr>
              <td>{myEvent.eventDate}</td>
            </tr>
            <tr>
              <td>{myEvent.eventDescription}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
