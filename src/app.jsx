import React, { Component } from 'react';
import './App.css';
import './Countdown.css';
import './EditEvent.css';
import Countdown from './countdown';
import EditEvent from './EditEvent';
import uniqid from 'uniqid';

class App extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                { id: 1, name: 'śniadanie', hour: "7", minute: "00" },
                { id: 2, name: 'obiad', hour: "15", minute: "00" },
                { id: 3, name: 'kolacja', hour: "19", minute: "00" }
            ],
            editedEvents: {
                id: uniqid('emilsuper'),
                name: "",
                hour: "",
                minute: ""
            }
        }
        this.handleEditEvent = this.handleEditEvent.bind(this);
        this.handleSaveEvent = this.handleSaveEvent.bind(this);
        this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
        this.handleEditInit = this.handleEditInit.bind(this);
    };

    handleEditEvent(val) {
        this.setState(prevState => {
            return {
                editedEvents: Object.assign(prevState.editedEvents, val),
            }
        })
    }

    handleSaveEvent() {
        this.setState(prevState => {
            const editedEventExists = prevState.events.find(
                el => el.id === prevState.editedEvents.id
            )

            let updatedEvents;
            if(editedEventExists) {
                updatedEvents = prevState.events.map(el => {
                    if(el.id === prevState.editedEvent.id) return prevState.editedEvent
                    else return el;
                })
            } else {
                updatedEvents = [...prevState.events,prevState]
            }

        })



        // this.setState(prevState => ({
        //     events: [...prevState.events, prevState.editedEvents],
        //     editedEvents: {
        //         id: uniqid('emilsuper'),
        //         name: "",
        //         hour: "",
        //         minute: ""
        //     }
        // }))
    }

    handleRemoveEvent(id) {
        this.setState(prevState => ({
            events: prevState.events.filter(el => el.id !== id)
        }))
    }

    handleEditInit(id) {
        this.setState(prevState => ({
            editedEvents:{ ...prevState.events.find(el => el.id === id)}
        }))
    }

    render() {
        const events = this.state.events.map(el => {
            return <Countdown
                key={el.id}
                id={el.id}
                name={el.name}
                hour={el.hour}
                onEdit={id => this.handleEditInit(id)}
                onRemove={id => this.handleRemoveEvent(id)}
                minute={el.minute} />
        })
        return (
            <div className="app">
                {events}
                <EditEvent
                    name={this.state.editedEvents.name}
                    hour={this.state.editedEvents.hour}
                    minute={this.state.editedEvents.minute}
                    onInputChange={val => this.handleEditEvent(val)}
                    onSave={() => this.handleSaveEvent()} />
            </div>
        )
    }
}

export default App