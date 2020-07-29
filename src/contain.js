import React from "react";
import { Button } from "react-bootstrap";
import FadeIn from 'react-fade-in';

function Chatoom (props) {
        return (
        <div className="container">
            <FadeIn>
                
                <p className = "chatroom"><strong>ห้อง</strong>{props.value[1]}</p>
                <div className="divchat">
                    <div className="container2">
                        <p className = "enterchat">asd</p>
                        <p className = "chatname">คุณ {props.value[0]}</p>
                    </div>
                </div>    
                <input type="text"className="chatbox" ></input><br />
                <p>sd</p>
                
                
                
                
                
            </FadeIn>

        </div>
            

        
        )
    }


export default Chatoom;