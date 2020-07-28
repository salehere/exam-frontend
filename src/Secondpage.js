import React from "react";
import { Button } from "react-bootstrap";
import FadeIn from 'react-fade-in';

function Secondpage (props) {
        console.log(props.onClick)
        return (
        <div className="container">
            <FadeIn>
                <h1 className = "header2">คุณ {props.value}</h1>
                <button className = "createroom" onClick ={(e) => props.onClick(2)}>สร้างห้องใหม่</button>
                <button className = "enterroom"  onClick ={(e) => props.onClick(3)}>เข้าร่วมแชท</button>

            </FadeIn>
        </div>
            

        
        )
    }


export default Secondpage ;