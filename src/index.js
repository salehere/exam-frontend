import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./main.scss" ;
import 'bootstrap/dist/css/bootstrap.css';
import Fade from 'react-bootstrap/Fade' ;



ReactDOM.render(<App/>, document.getElementById("root"));

serviceWorker.unregister();
