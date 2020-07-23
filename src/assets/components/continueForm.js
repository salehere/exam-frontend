import React, { Component } from 'react'

export class continueForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    joinRoom = e => {
        e.preventDefault();
        this.props.nextStep(2);
    }

    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        return (
            <React.Fragment>
                <div className="text" style={{padding:"7%"}}>{this.props.values.name}</div>
                <button className="button" style={{width:"20%"}} onClick={this.continue}>สร้างห้องใหม่</button>
                <button className="text-button" style={{display: "inherit",width:"20%"}} onClick={this.joinRoom}>เข้าร่วมแชท</button>
            </React.Fragment>
        )
    }
}

export default continueForm
