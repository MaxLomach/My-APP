import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css"
import App from "./app";
import Counter from "./components/counter";




reactDom.render(<App/>, document.querySelector('#root'))