import React from 'react';
import PropTypes from "prop-types";

import "./Countdown.css";
import "./../node_modules/semantic-ui-css/semantic.css"

const Countdown = props => {
    console.log(props.timeNow)

    return (<div>
        <div className="countdown">
           <strong>{props.name} </strong> {props.hour}:{props.minute}
           <div className="countdown__icons">
                <i className="icon edit"  onClick={() => props.onEdit(props.id) } />
                <i className="icon times" onClick={() => props.onRemove(props.id) }/>
           </div>
        </div>
    </div>
)}

Countdown.propTypes = {
    name:PropTypes.string,
    hour:PropTypes.number,
    minute:PropTypes.number, 
    onEdit:PropTypes.func,
    timeNow:PropTypes.shape({
        hour:PropTypes.number,
        minute:PropTypes.number,
        second:PropTypes.number
    }),
    onRemove:PropTypes.func,
};


export default Countdown;