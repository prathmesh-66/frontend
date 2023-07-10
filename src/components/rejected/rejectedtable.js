import React from "react";
import "../cs.css";

const rejectedtable = (props) => {
  return (
    <div className="candidate_card">
      <div className="pro-details">
        <h3>{props.name}</h3>
        <div className="list">
            <ul>
                <li>{props.time}</li>
                <li>{props.HSR}</li>
                <li>{props.gender}</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default rejectedtable;
