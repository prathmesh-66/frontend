import React from "react";
import "../cs.css";
import Acceptedtable from "./acceptedtable"
import Acceptedtabledata from "./acceptedtabledata"



const accepted = () => {
  return (
    <div className="container">
      <div>
        <h1>Accpeted</h1>
      </div>
        <div className="project-container">
          {Acceptedtabledata.map((val,ind)=>{
            return(
                <Acceptedtable
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

export default accepted;
