import React from "react";
import Common from "./Common";
import web from "../src/images/photo.png";
import {NavLink} from "react-router-dom";
//import $ from 'jquery';

// Type Writer 

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.innerHTML = ".typewrite > .wrap { border-right: 0 solid #fff}";
  document.body.appendChild(css);
};

const Home = () =>{
  return(
    <>
    <Common 
    name={["Hello there, My Name is", <strong className="brand-name"> <br />Khurshid Ali</strong>]}
    content={[<h2 className="text-left">"I am having more than 12 years of experience in UI Designing/Development"</h2>]}
    imgsrc={web} 
    viewbutton={[<NavLink className="btn btn-light" to="/about">Know More</NavLink>]}
    displey="d-block"  />

    </>
  )
} 

export default Home;