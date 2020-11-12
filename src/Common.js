import React from "react";
//import {NavLink} from "react-router-dom";


const Common = (props) =>{
  return(
    <>
    <section id="header" className="d-flex align-items-center mt-2">
    <div className="container-fluid nav_bg">
    <div className="row">
    <div className="col-10 mx-auto">
    <div className="row">
      <div className="col-lg-8 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
          <h1>{props.name} 
          </h1>
          <p className="my-3">{props.content}          
          </p>
          <h2 className={props.displey}> 
   <a href="#" class="typewrite" data-period="2000" data-type='[ "Hi, I am a UI Developer.", "I am a Front End Devloper","I am a React Devloper", "I am a  Creative Designer.", "I am a Code Lover." ]'>
     <span class="wrap"></span>
  </a>
</h2>
          <div className="mt-3">
          {props.viewbutton}
          </div>
                  
      </div>

    <div className="col-lg-4 order-1 order-lg-2 header-img">
        <img src={props.imgsrc} className="img-fluid animated" alt="Logo" />
    </div>
    </div>

    </div>
    </div>
    </div>
    </section>
    </>
  )
} 

export default Common;