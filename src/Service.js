import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";


const Services = () =>{
  return(
    <>
    <section className="services">
    <div className="my-5">
{/* <h1 className="text-center">Our Services</h1> */}
</div>
<div className="container-fluid mb-5">
<div className="row">
<div className="col-10 mx-auto">
<div className="row gy-4">
    {
        Sdata.map((val, ind)=>{
            return <Card key={ind} imgsrc={val.imgsrc} title={val.title} siteurl={val.siteurl} />
        })}
</div>
</div> 
</div>
</div>
</section>
</>
  )
} 

export default Services;