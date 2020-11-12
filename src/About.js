import React from "react";
import Common from "./Common";
import web from "../src/images/about-me.png";
import myCV from '../src/Khurshid-CV.docx';

const About = () =>{
  return(
    <>
    <Common 
    name=""
    content="Hello there! I am Sr. UI Developer living in New Delhi, India. Since my youngest age I have been passionate about design and development. I grew up with the Internet like Designing & Development interest focusing on HTML, CSS, Javascript and Jquery. Basically, I am a UI Developer/Designer and code lover. I possess more than 10 years of web design and front-end development experience."
    imgsrc={web} 
    viewbutton={[<a href={myCV} className="btn btn-light" rel="noopener noreferrer" download="Khurshid-CV.docx">Get My CV</a>]}
    displey="d-none" />
    </>
  )
} 

export default About;