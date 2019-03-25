import React, { Component } from 'react';
import './App.css';
import './Countdown.css';
import './EditEvent.css';
import Countdown from './countdown';
import EditEvent from './EditEvent';

class App extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                { id: 1, name: 'śniadanie', hour: "7"  , minute:"00" },
                { id: 2, name: 'obiad',     hour: "15" , minute:"00" },
                { id: 3, name: 'obiad',     hour: "15" , minute:"00" }
            ],
            editedEvents: {
                id:3,
                name:"",
                hour:"",
                minute:""
            }
        }
        this.handleEditEvent = this.handleEditEvent.bind(this);
        this.handleSaveEvent = this.handleSaveEvent.bind(this);
    };

    handleEditEvent(val) {   
        this.setState(prevState => {
            return {
                editedEvents: Object.assign(prevState.editedEvents, val)
            }
        })
    }

    handleSaveEvent() {
        this.setState(prevState => ({
            events:[...prevState.events,prevState.editedEvents]
        }))

    }
    render() {
        const events = this.state.events.map(el => {
            return <Countdown key={el.id} name={el.name} hour={el.hour} minute={el.minute} />
        })
        return (
            <div className="app">
                {events}
                <EditEvent  onInputChange={val => this.handleEditEvent(val)} onSave={() => this.handleSaveEvent()}/>
            </div>
        )
    }
}

export default App