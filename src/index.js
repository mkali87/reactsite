import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import "./responsive.css";
import 'font-awesome/css/font-awesome.min.css';


ReactDom.render(
<>
<BrowserRouter><App /></BrowserRouter>
</>, 
  document.getElementById("root"))