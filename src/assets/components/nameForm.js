import React, { Component } from 'react'

export class nameForm extends Component {

    continue = e => {
        e.preventDefault();
        if(this.props.values.name === ''){
            alert('Pls Input YourName')
        }
        else this.props.nextStep();
    };

    render() {
        const { handleChange } = this.props;

        var shown = {
            display: this.props.values.button ? "block" : "none"
        };

        return (
            <React.Fragment>
                <div className="text">
                    ชื่อของคุณ
                </div>
                <input className="input" type="input" name="Name" onChange={handleChange('name')} />
                <button className="button" style={shown} onClick={this.continue}>ยืนยัน</button>
            </React.Fragment>
        )
    }
}

export default nameForm
