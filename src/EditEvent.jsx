import React from 'react';

const EditEvent = props => {
    return (
        <div className="edit-event">
            <div className="edit-event__input-group">
                <p>
                    <label htmlFor="name">name</label>
                    <input 
                    type="text" 
                    id="name" 
                    onChange={ e => props.onInputChange({[e.target.name]:e.target.value})}
                    name="name" />
                </p>
            </div>
            <div className="edit-event__input-group">
                <p>
                    <label htmlFor="hour">hour</label>
                    <input 
                    type="tel" 
                    id="hour" 
                    onChange={ e => props.onInputChange({[e.target.name]:e.target.value})}
                    name="hour" />
                </p>
            </div>
            <div className="edit-event__input-group">
                <p>
                    <label htmlFor="minute">minute</label>
                    <input 
                    type="tel" 
                    id="minute" 
                    onChange={ e =>  props.onInputChange({[e.target.name]:e.target.value})}
                    name="minute" />
                </p>
            </div>
            <button>ok</button>
            <button>cancel</button>
        </div>
    )
}

export default EditEvent