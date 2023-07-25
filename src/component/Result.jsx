import React, { Fragment, useContext } from "react";
import "./fillUp";
import "./Result.css"
import { useSelector } from "react-redux";
const Result = (props) => {

  const fname =useSelector(state=> state.details.Fname)
  const lname =useSelector(state=> state.details.Lname)
  const email =useSelector(state=> state.details.Email)

  return (
    <Fragment>
      <center>
        <div className="Result card" style={{maxWidth:"30rem"}}>
          <h1>Result</h1>
          <h6>Your name: {fname} {lname}</h6>
          <h6>Email: {email}</h6>
          <h6>Your score: {props.score}</h6>
          <h6>Correct answer: {props.correstAns}</h6>
          <h6>Wrong answer: {props.wrongAns}</h6>
        
        </div>
      </center>
    </Fragment>
  );
};

export default Result;
