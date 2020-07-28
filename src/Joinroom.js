import React from "react";
import { Button } from "react-bootstrap";
import FadeIn from 'react-fade-in';

function Createroom (props) {
        return (
        <div className="container">
            <FadeIn>
                <h1 className = "header1">เข้าร่วมแชท</h1>
                <input type="text" value={props.value} name={props.name} className="input2" onChange={props.onChange} ></input><br />
                <div>
                    <button className = "back"  onClick ={(e) => props.onClick(1)}>กลับ</button>
                    <button className = "confirm" onClick ={(e) => props.onClick(4)}>เข้าร่วม</button>
                </div>
            </FadeIn>

        </div>
            

        
        )
    }


export default Createroom;