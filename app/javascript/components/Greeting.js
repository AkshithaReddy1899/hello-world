import React from "react"
import PropTypes from "prop-types"

const Greeting = () => {
  return (
    <h1>Greeting!</h1>
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
