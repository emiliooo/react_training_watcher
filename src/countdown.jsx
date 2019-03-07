import React from 'react';

const Countdown = props => (
    <div>
        <div classname="countdown">
            <strong>{props.name} </strong> { props.time}
        </div>
    </div>
)

export default Countdown;