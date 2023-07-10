import React from "react";
import "../cs.css";
import Appliedtable from "./appliedtable"
import Appliedtabledata from "./appliedtabledata"



const applied = () => {
  return (
    <div className="container">
      <div>
        <h1>Applied</h1>
      </div>
        <div className="project-container">
          {Appliedtabledata.map((val,ind)=>{
            return(
                <Appliedtable
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

export default applied;
