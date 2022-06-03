import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreetingFromApi } from "../redux/greeting";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(state => state.greeting)
  
  const handleClick = () => {
    dispatch(fetchGreetingFromApi())
  }

  return (
    <React.Fragment>
      <h1>Greeting!</h1>
      <b>{greeting.message}</b>
      <br/><br/><br/>
      <button onClick={handleClick} >Generate greeting</button>
    </React.Fragment>
  );
};

export default Greeting;
