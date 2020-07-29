import React from "react";
import { Button } from "react-bootstrap";

class Sectionchange1 extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            roomname: "",
            statecount: 0,
            yourname: "" ,

        }
        this.checkLength = this.checkLength.bind(this)

    }
    Button1() {
        return(
            <button className="button1">กดตรงนี้</button>
        )
    }
    
    checkLength(event) {
        const target = event.target;
        const value = target.value;
        console.log('state :' + this.state.yourname)
        this.setState({ yourname: value });
        
        /* check input length ni*/
        
    }

    render() {
        ;
        
        return (
        <Section1 value={this.state.yourname} onChange={this.checkLength} />
        )
    }

}

function Section1(props) {
    console.log(props)
    if (props.value.length > 0) {
        console.log('pass')
        return (<div className="container" >
        <h1 className="header1">ชื่อของคุณ</h1>
        <input type="text" value={props.value} className="input1" onChange={props.onChange}></input><br />
        <Button1 />
        
    </div>)
    
    }
    return(
    <div className="container" >
        <h1 className="header1">ชื่อของคุณ</h1>
        <input type="text" value={props.value} className="input1" onChange={props.onChange}></input><br />
        
        
    </div>
    )
}


function Button1() {
    return(
        <button className="button1">กดตรงนี้</button>
    )
}

export default Sectionchange1;