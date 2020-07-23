import React, { Component } from 'react'

export class joinroomForm extends Component {
    state = {
        roomname : ''
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    previous = e => {
        e.preventDefault();
        this.props.prevStep(2);
    }

    checkState = e => {
        e.preventDefault();
        const value = this.props.values.roomName;
        const values = value.includes(this.state.roomname)
        console.log(values)
        if(values){
            this.props.nextStep();
        }
        else return alert("Room Not Match")
    }

    handleChange= e => {
        e.preventDefault();
        this.setState( { roomname : e.target.value})
    }

    render() {

        return (
        <React.Fragment>
            <div className="text">เข้าร่วมแชท</div>
            <input className="input" type="input" name="Name" onChange={this.handleChange} value={this.state.roomname} />
            <button className="text-button text-button-fix" style={{display: "inline-block"}}  onClick={this.previous}>กลับ</button>
            <button className="button" style={{display: "inline-block"}} onClick={this.checkState}>ยืนยัน</button>
        </React.Fragment>
        )
    }
}

export default joinroomForm
