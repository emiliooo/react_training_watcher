import React from 'react';
import PropTypes from "prop-types";

const Countdown = props => (
    <div>
        <div className="countdown">
           <strong>{props.name} </strong> {props.hour}:{props.minute}
        </div>
    </div>
)

Countdown.propTypes = {
    name:PropTypes.string,
    hour:PropTypes.string,
    minute:PropTypes.string, 
}


export default Countdown;