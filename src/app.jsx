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
            now: {
                hour:new Date().getHours(),
                minute:new Date().getMinutes(),
                seconds:new Date().getSeconds()
            },
            events: [
                { id: 1, name: 'śniadanie', hour: 7, minute: 0 },
                { id: 2, name: 'obiad', hour: 15, minute: 0 },
                { id: 3, name: 'kolacja', hour: 19, minute: 0 }
            ],
            editedEvent: {
                id: uniqid('emilsuper'),
                name: "",
                hour: -1,
                minute: -1
            }
        }
        this.handleEditEvent = this.handleEditEvent.bind(this);
        this.handleSaveEvent = this.handleSaveEvent.bind(this);
        this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
        this.handleEditInit = this.handleEditInit.bind(this);
        this.handleEditCancel = this.handleEditCancel.bind(this);
    };

    handleEditEvent(val) {
        this.setState(prevState => {
            return {
                editedEvent: Object.assign(prevState.editedEvent, val),
            }
        })
    }

    handleSaveEvent() {
        this.setState(prevState => {
            const editedEventExists = prevState.events.find(
                el => el.id === prevState.editedEvent.id
            )


            let updatedEvents;
            if (editedEventExists) {
                updatedEvents = prevState.events.map(el => {
                    if (el.id === prevState.editedEvent.id) return prevState.editedEvent;
                    else return el;
                })
            } else {
                updatedEvents = [...prevState.events, prevState.editedEvent]
            }

            return {
                events: updatedEvents,
                editedEvent: { id: uniqid(), name: '', hour: -1, minute: -1 }
            }

        })
    }

    handleRemoveEvent(id) {
        this.setState(prevState => ({
            events: prevState.events.filter(el => el.id !== id)
        }))
    }

    handleEditInit(id) {
        this.setState(prevState => ({
            editedEvent: { ...prevState.events.find(el => el.id === id) }
        }))
    }

    handleEditCancel() {
        this.setState({
            editedEvent:{ id: uniqid(), name: '', hour: -1, minute: -1 }
        })
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
                minute={el.minute} 
                timeNow={this.state.now}/>
        })
        return (
            <div className="app">
                {events}
                <EditEvent
                    name={this.state.editedEvent.name}
                    hour={this.state.editedEvent.hour}
                    minute={this.state.editedEvent.minute}
                    onInputChange={val => this.handleEditEvent(val)}
                    onSave={() => this.handleSaveEvent()} 
                    onCancel={() => this.handleEditCancel() }/>
            </div>
        )
    }
}

export default App