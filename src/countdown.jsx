import React from 'react';
import PropTypes from "prop-types";

const Countdown = props => (
    <div>
        <div className="countdown">
      <strong>{props.name} </strong> { props.time}
        </div>
    </div>
)

Countdown.propTypes = {
    name:PropTypes.string,
    time:PropTypes.string
}


export default Countdown;