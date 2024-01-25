import React from "react";
//import Card from "./Card";


const Skills = () =>{
  return(
    <>
    <section>
    <div className="my-5">
{/* <h1 className="text-center">Our Skills</h1> */}
</div>
<div className="container-fluid mb-5 skillset">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">

<div className="col-md-6">
    <h1>My Skills</h1>
    {<p>In my career, I have worked on many technologies like HTML, CSS, SASS, Javascript, Jquery, AJAX, Angular, and WordPress as well as having good experience in Photoshop, Figma, and many more. I have basic knowledge in React and I created this portfolio in React by myself. I am very hungry to learn new things. I am fond of watching tutorials online on the internet and I have Completed a lot of courses in my domain from different institutions. I am very Professional and Passionate about my work and I believe in Team Spirit and Hard work in the right direction. I have very good knowledge of completing any front-end development work by using my skill set.</p> }
</div>

<div className="col-md-5 ml-5 skillbar">
<p>HTML</p>
<div className="container">
  <div className="skills html">90%</div>
</div>

<p>CSS</p>
<div className="container">
  <div className="skills css">90%</div>
</div>

<p>SASS</p>
<div className="container">
  <div className="skills sass">65%</div>
</div>

<p>Jquery</p>
<div className="container">
  <div className="skills jquery">85%</div>
</div>

<p>JavaScript</p>
<div className="container">
  <div className="skills js">70%</div>
</div>

<p>Photoshop/Figma</p>
<div className="container">
  <div className="skills photoshop">80%</div>
</div> 
</div>

</div>
</div> 
</div>
</div>
</section>
</>
  )
} 

export default Skills;