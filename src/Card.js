import React from "react";
//import web from "../src/images/s1.jpg";
//import {NavLink} from "react-router-dom";

const Card = (props) =>{
  return(
    <>
    
 <div className="col-md-4 col-10 mx-auto my-3">
 <div className="card">
<img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} width="100%" height="200" />
<div className="card-body">
<h5 className="card-title">{props.title}</h5>
<p className="card-text">{props.description}</p>
<div className="text-right"><a href={props.siteurl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">View Site</a></div>
</div>
</div>
 </div>

    </>
  )
} 

export default Card;
