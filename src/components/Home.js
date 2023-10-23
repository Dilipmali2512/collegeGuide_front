import React, { useState } from "react";
import "../App.css";
import Data from "./Data";
const Home = () => {
  const [info, setInfo] = useState({
    merit: "",
    collegetype: "",
    fees: "",
    numbercourse: "",
  });

  const onChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleclick = (e) => {
    e.preventDefault();
    fetchinfo(info.merit, info.collegetype, +info.fees, info.numbercourse);
  };

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const fetchinfo = async (merit, collegetype, fees, numbercourse) => {
    try {
      const response = await fetch("http://localhost:5507/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          merit,
          collegetype,
          fees,
          numbercourse,
        }),
      });
      const userdata = await response.json();
      setNotes(userdata);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-5">
        <span>
          <i class="fa-sharp fa-solid fa-graduation-cap fa-2xl"></i>
          <span>BestCollegeFinder</span>
        </span>
      </div>
      <div className="home container">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Enter Merit Number</label>
          <br />
          <input
            name="merit"
            type="number"
            placeholder="Merit"
            id="merit"
            onChange={onChange}
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="inputState">Enter Your college type</label>
          <select
            id="inputState"
            className="form-control"
            name="collegetype"
            onChange={onChange}
          >
            <option defaultValue>select...</option>
            <option value="Public/Government">Gov</option>
            <option value="Private">Pvt</option>
          </select>
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="inputState">Affordable fees range</label>
          <select
            id="inputState"
            className="form-control"
            name="fees"
            onChange={onChange}
          >
            <option defaultValue>Fees...</option>
            <option value={100000}>25000-100000</option>
            <option value={250000}>100000-250000</option>
            <option value={500000}>250000-500000</option>
          </select>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Number of course</label>
          <br />
          <input
            name="numbercourse"
            type="number"
            placeholder="Number of course"
            id="numbercourse" max={20}
            onChange={onChange}
          />
        </div>

        <button onClick={handleclick} className="btn btn-primary ml-3">
          submit
        </button>
      </div>

      <div className="container data mt-5 home">
        <h2>List of colleges : </h2>
        {notes.map((note) => {
          return <Data key={note.CollegeName} data={note} />;
        })}
      </div>
    </>
  );
};

export default Home;
