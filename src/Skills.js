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
    {<p>In my Career, I have worked on many technologies like HTML, CSS, Javascript, Jquery, SASS, AMP, AJAX, React JS, PHP and many more. As you know I am very hungry to learn new things. I am fond of watching tutorials online on the internet and I have Completed lot of courses in my domain from different different institutions. I am very Professional and Passionate about my work and I beleive in Team Spirit and Hard working in right direction. I have very good knowledge to completed any front end development work via using my skills set.</p> }
</div>

<div className="col-md-5 ml-5 skillbar">
<p>HTML</p>
<div className="container">
  <div className="skills html">90%</div>
</div>

<p>CSS</p>
<div className="container">
  <div className="skills css">85%</div>
</div>

<p>Jquery</p>
<div className="container">
  <div className="skills jquery">80%</div>
</div>

<p>JavaScript</p>
<div className="container">
  <div className="skills js">60%</div>
</div>

<p>PHP</p>
<div className="container">
  <div className="skills php">30%</div>
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