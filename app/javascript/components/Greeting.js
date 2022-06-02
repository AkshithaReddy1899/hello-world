import React from "react"
import PropTypes from "prop-types"
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
export default Greeting
