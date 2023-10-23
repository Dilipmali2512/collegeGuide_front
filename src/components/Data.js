import React from "react";

const Data = (props) => {
  const { data } = props;

  return (
    <>
      <div
        className="data mt-5"
        style={{ border: "2px solid black", padding: "10px 10px 10px 10px" }}
      >
        <span className="span">College Name : </span>
        <span>{data.CollegeName}</span>
        <br />
        <br />
        <span className="span">Campus Size : </span>
        <span>{data.CampusSize}</span>
        <br />
        <br />
        <span className="span">Courses : </span>
        <span>{data.Courses}</span>
        <br />
        <br />
        <span className="span">Facilities : </span>
        <span>{data.Facilities}</span>
        <br />
        <br />
        <span className="span">City : </span>
        <span>{data.City}</span>
        <br />
        <br />
        <span className="span">State : </span>
        <span>{data.State}</span>
        <br />
        <br />
      </div>
    </>
  );
};

export default Data;
