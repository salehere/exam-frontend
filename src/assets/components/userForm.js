import React, { Component } from 'react'
import NameForm from './nameForm';
import ContinueForm from './continueForm';
import CreateroomForm from './createroomForm';
import JoinRoomForm from './joinroomForm';
import ChatRoom from './chatRoom';

export class UserForm extends Component {
    state = {
        step: 1,
        name: '',
        roomName: [],
        button: false,
    }

    nextStep = values => {
        const { step } = this.state;
        if (!values) {
            this.setState(
                {
                    step: step + 1
                }
            );
        }
        else (
            this.setState(
                {
                    step: step + values
                }
            )
        )
    }

    prevStep = values => {
        const { step } = this.state;
        if (!values) {
            this.setState(
                {
                    step: step - 1,
                    name: ''
                }
            );
        }
        else (
            this.setState(
                {
                    step: step - values,
                }
            )
        )
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
        setTimeout(() => {
            if (this.state.name === '') {
                this.setState({ button: false })
            }
            else {
                this.setState({ button: true })
            }
        }, 100
        )
    }

    pushSubmit = roomname => {
        this.setState(state => {
            const roomName = [...state.roomName, roomname];
            return {
                roomName
            };
        });
        console.log(this.state.roomName)
    }

    render() {
        const { step } = this.state;
        const { name, roomName, button } = this.state;
        const values = { name, roomName, button };

        switch (step) {
            case 1:
                return (
                    <div className="slide-bottom" style={{ height: "100%" }}>
                        <NameForm
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </div>
                )
            case 2:
                return (
                    <div className="w3-animate-opacity" style={{ height: "100%" }}>
                        <ContinueForm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </div>
                )
            case 3:
                return (
                    <div className="fade-in" style={{ height: "100%" }}>
                        <CreateroomForm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            Submit={this.pushSubmit}
                            values={values}
                        />
                    </div>
                )
            case 4:
                return (
                    <div className="fade-in" style={{ height: "100%" }}>
                        <JoinRoomForm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </div>
                )
            case 5:
                return (
                    <div className="w3-animate-opacity" style={{ height: "100%" , display:"grid" , gridTemplateRows: "min-content"}}>
                        <ChatRoom
                            prevStep={this.prevStep}
                            values={values}
                        />
                    </div>
                )
            default:
                return null
        }
    }
}

export default UserForm;
