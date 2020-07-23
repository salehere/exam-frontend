import React, { Component } from 'react'

export class createroomForm extends Component {
    state = {
        roomname: ''
    }

    continue = e => {
        e.preventDefault();
        if (this.state.roomname !== '') {
            this.props.nextStep(2);
            this.props.Submit(this.state.roomname)
        }
        else {
            alert("Pls Input roomname")
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({ roomname: e.target.value })
    }

    previous = e => {
        e.preventDefault();
        this.props.prevStep(1);
    }

    render() {
        return (
            <React.Fragment>
                <div className="text">สร้างห้องใหม่</div>
                <input className="input" type="input" name="Name" value={this.state.roomname} onChange={this.handleChange} />
                    <button className="text-button text-button-fix" style={{display:"inline"}} onClick={this.previous}>กลับ</button>
                    <button className="button" style={{display:"inline"}} onClick={this.continue}>ยืนยัน</button>
            </React.Fragment>
        )
    }
}

export default createroomForm
