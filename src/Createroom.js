import React from "react";
import { Button } from "react-bootstrap";
import FadeIn from 'react-fade-in';

function Createroom (props) {
        return (
        <div className="container">
            <FadeIn>
                <h1 className = "header1">สร้างห้องใหม่</h1>
                <input type="text" value={props.value} name={props.name} className="input2" onChange={props.onChange} placeholder="ชื่อห้อง" ></input><br />
                <div>
                    <button className = "back"  onClick ={(e) => props.onClick(1)}>กลับ</button>
                    <button className = "confirm" onClick ={(e) => props.onClick(4)}>ยืนยัน</button>
                </div>
            </FadeIn>

        </div>
            

        
        )
    }


export default Createroom;