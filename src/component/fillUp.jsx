import React, { Fragment, createContext, useEffect, useState } from "react";
import "./fillUp.css";
import Home from "./home";
// import AddIcon from "@mui/icons-material/Add";
import Switch from '@mui/material/Switch';
import { useDispatch } from "react-redux";
import { detailAction } from "../store/details-slice";

const Fillup = ({ sendDataToHome }) => {

  const MyContext = createContext()

  const dispatch=useDispatch()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [checkDetails, setCheckDetails] = useState(false);
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    emailadd: ""
  });


  const checkEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleEmail = (e) => {
    if (!checkEmail(e.target.value)) {
      setEmailError("Email is not valid");
    } else {
      setEmailError(null);
    }
    setEmail(e.target.value);
  };

  var allDetails = false;
  if (firstName !== "" && lastName !== "" && email !== "") {
    allDetails = true;
  }

  useEffect(()=>{
    sendDataToHome(checkDetails)
  },[checkDetails])

  const handleClick = (data) => {
    data.preventDefault();
    setCheckDetails(true);
    setDetails({ fname: firstName, lname: lastName, emailadd: email });
    
    dispatch(detailAction.setFname(firstName))
    dispatch(detailAction.setLname(lastName))
    dispatch(detailAction.setEmail(email))
    // console.log(checkDetails);
  };







  return (
    <Fragment>
      <center>
        <form onSubmit={handleClick}>
          <div className="FormPattel m-3 card ">
            <h3 className="mt-2">Please enter the following details.</h3>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  onChange={(e) => {
                    let result = e.target.value.replace(/[^a-z]/gi, "");
                    setFirstName(result);
                  }}
                  className="form-control"
                  value={firstName}
                  name="fname"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  onChange={(e) => {
                    let Lname = e.target.value.replace(/[^a-z]/gi, "");
                    setLastName(Lname);
                  }}
                  value={lastName}
                  name="lname"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
            <p className="mention">Numbers is not allowed</p>
            <div className="mb-3">
              <input
                type="text"
                value={email}
                onChange={handleEmail}
                name="emailadd"
                className="form-control mt-2"
                id="exampleFormControlInput1"
                placeholder="Enater your email"
              />
              {emailError && <label className="Warning">{emailError}</label>}
            </div>
            <button
              disabled={!allDetails}
              className="mb-2 sendButton"
              type="submit"
            >
              Send details
            </button>

          </div>
        </form>

      </center>
    </Fragment>
  );
};

export default Fillup;
