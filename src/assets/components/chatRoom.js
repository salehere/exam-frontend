import React, { Component } from 'react'

export class chatRoom extends Component {

    previous = e => {
        e.preventDefault();
        this.props.prevStep(2);
    }

    render() {
        const map = this.props.values.roomName;
        const item = map[map.length - 1];

        return (
            <React.Fragment >
                <div className="head-chatRoom">
                    ห้อง {item}
                </div>
                <div className="container-chatroom">
                    <div className="text-chat">
                        คุณ {this.props.values.name}
                        <div className="text-chat-box">
                            สวัสดี
                        </div>
                    </div>
                    <div>
                        <input className="input textchat" placeholder="Enter เพื่อส่ง" id="entermassage" style={{width: "100%"}} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default chatRoom
