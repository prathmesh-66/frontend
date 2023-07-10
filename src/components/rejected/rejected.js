import React from "react";
import "../cs.css";
import Rejectedtable from "./rejectedtable"
import Rejectedtabledata from "./rejectedtabledata"



const rejected = () => {
  return (
    <div className="container">
      <div>
        <h1>Rejected</h1>
      </div>
        <div className="project-container">
          {Rejectedtabledata.map((val,ind)=>{
            return(
                <Rejectedtable
                key={ind}
                name={val.name}
                time={val.time}
                HSR={val.HSR}
                gender={val.gender}
                />
            )
          })}
          
        </div>
      </div>
  );
};

export default rejected;
