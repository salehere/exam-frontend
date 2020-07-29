import React from "react";
import { Button } from "react-bootstrap";
import FadeIn from 'react-fade-in';

function Chatoom (props) {
        return (
        <div className="container">
            <FadeIn>
                
                <p className = "chatroom"><strong>ห้อง {props.value[1]}</strong></p>
                <div className="divchat">
                    <div className="container2">
                        <p className = "chatname">คุณ {props.value[0]}</p>
                    </div>
                    <div className="container3">
                        <p className="sawasdee">สวัสดี</p>
                    </div>
                </div>  
                <input type="text"className="chatbox" placeholder="Enter เพื่อส่ง" ></input><br />
                
                
                
                
                
                
            </FadeIn>

        </div>
            

        
        )
    }


export default Chatoom;