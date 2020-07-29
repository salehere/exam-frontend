import React from "react";
import { Button } from "react-bootstrap";
import FadeIn from 'react-fade-in';
import Secondpage from "./Secondpage" ;
import Createroom from "./Createroom" ;
import Chatroom from "./Chatroom" ;
import Joinroom from "./Joinroom" ;


class Sectionchange1 extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            roomname: "",
            step: 0,
            yourname: "" ,

        }
        this.checkLength = this.checkLength.bind(this)
        this.clickstate = this.clickstate.bind(this)
    }
    
    nextStep = (e) => {
        const { step } = this.state;
        this.setState({
          step: e
        });
        console.log(this.state.step)
      };
    
     
    
    clickstate(event) {
        this.setState({statecount : this.state.statecount + 1})
    }
    
    checkLength(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log('change: ' + [name] + ' ' + value);
        this.setState({ [name]: value });
        
        /* check input length ni*/
        
    }

         
    

    render() {
        const { step } = this.state;
        switch (step) {
            case 0 : //Home
                return (
                <Section1 value={this.state.yourname} name="yourname" onChange={this.checkLength} onClick = {() => this.nextStep(1)} />
                ) ;
            
            case 1 : //Create or Join
                return (<Secondpage value = {this.state.yourname} onClick = {(i) => this.nextStep(i)}/>)
            
            case 2 : //Create
                return (<Createroom value={this.state.roomname} onChange={this.checkLength} onClick = {(i) => this.nextStep(i)} name="roomname"/>)
            
            case 3 : //joinroom
                return (<Joinroom value={this.state.roomname} onChange={this.checkLength} onClick = {(i) => this.nextStep(i)} name="roomname"/>)

            case 4 : //Chatroom
                return (<Chatroom value={[this.state.yourname,this.state.roomname]} />)

            
            default:
                return (
                    <div></div>
                )
        }
    }

}


function Section1(props) {
    if (props.value.length > 0) {
        console.log('pass')
        return (
        <div className="container" >
        <h1 className="header1">ชื่อของคุณ</h1>
        <input type="text" value={props.value} name={props.name} className="input1" onChange={props.onChange}  ></input><br />
        <Button1 onClick={props.onClick}/>
        
    </div>)
    
    }
    return(
    <div className="container" >
        <h1 className="header1">ชื่อของคุณ</h1>
        <input type="text" value={props.value} name={props.name} className="input1" onChange={props.onChange} ></input><br />
        
        
    </div>
    )
}


function Button1(props) {
    return(
        <FadeIn>
            <button className="button1" onClick ={props.onClick}>กดตรงนี้</button>
        </FadeIn>
    )
}

export default Sectionchange1;