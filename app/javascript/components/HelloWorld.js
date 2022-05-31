import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { fetchGreetingsFromApi } from "../redux/greetings/greetingReducer"


const HelloWorld =() => {
  const greeting = useSelector((state) => state.greetings);
  const {title} = greeting
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchGreetingsFromApi());
  }, [dispatch]);

  return (
      <div className="greeting-container">
        <h1>Hello! This is greetings page</h1>
        <h2 className="text">{title}</h2>
        <button onClick={() => dispatch(fetchGreetingsFromApi())} className="btn">Click for next greeting</button>
        <br/>
        <Link to='/' className='link-to'>Home page</Link>
      </div>
  );
}



HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld

