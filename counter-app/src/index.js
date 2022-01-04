//import React from "react";
import ReactDOM from "react-dom";
//import CounterApp from "./CounterApp";
import PrimeraApp from "./PrimeraApp"

//import PrimeraApp from "./PrimeraApp";

import './index.css';

const divRoot = document.querySelector('#root');

//ReactDOM.render(<CounterApp value={5} />, divRoot);
ReactDOM.render(<PrimeraApp saludo="Hola Mundo" />, divRoot);
