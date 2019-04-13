import React from 'react';
import PropTypes from "prop-types";
import { isValidNumber, parseInputAsNumber, isValidName, isValidHour, isValidMinute } from './utils'

const EditEvent = props => {
    const isFormValid = isValidName(props.name) &&
                        isValidHour(props.hour) &&
                        isValidMinute(props.minute);
    return (
        <div className="edit-event">
            <div className="edit-event__input-group">
                <p>
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        id="name"
                        value={props.name}
                        onChange={e => props.onInputChange({ [e.target.name]: e.target.value })}
                        name="name" />
                </p>
            </div>
            <div className="edit-event__input-group">
                <p>
                    <label htmlFor="hour">hour</label>
                    <input
                        type="tel"
                        id="hour"
                        value={props.hour === -1 ? "" : props.hour}
                        onKeyPress={e => isValidNumber(e)}
                        onChange={e => props.onInputChange({ [e.target.name]: parseInputAsNumber(e.target.value) })}
                        name="hour" />
                </p>
            </div>
            <div className="edit-event__input-group">
                <p>
                    <label htmlFor="minute">minute</label>
                    <input
                        type="tel"
                        id="minute"
                        value={props.minute === -1 ? "" : props.minute}
                        onKeyPress={e => isValidNumber(e)}
                        onChange={e => props.onInputChange({ [e.target.name]: parseInputAsNumber(e.target.value) })}
                        name="minute" />
                </p>
            </div>
            <button className="edit-event__button_ok" disabled={!isFormValid} onClick={props.onSave}>ok</button>
            <button className="edit-event__button_cancel" onClick = {props.onCancel}>cancel</button>
        </div>
    )
}

EditEvent.propTypes = {
    name: PropTypes.string,
    hour: PropTypes.number,
    minute: PropTypes.number,
    onInputChange: PropTypes.func,
    onSave: PropTypes.func,
    onCancel:PropTypes.func
};

export default EditEvent