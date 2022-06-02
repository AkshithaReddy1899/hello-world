import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from '../redux/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(state => state.greeting)
  console.log(greeting);

  useEffect(() => {
    dispatch(fetchGreeting())
  }, []);

  return (
    <>
      <h1>Greeting!</h1>
      <p>{greeting.message}</p>
    </>
  );
}
/*
class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        Message: {this.props.message}
      </React.Fragment>
    );
  }
}

Greeting.propTypes = {
  message: PropTypes.node
};
*/

export default Greeting;
