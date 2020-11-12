import React, { useState } from "react";

const Contact = () =>{

// const [data, setData] = useState({
//     fullname:"",
//     phone:"",
//     email:"",
//     msg:""
// })

// const InputEvent = (event) => {
//     const{name,value} = event.target;

//     setData((preVal)=>{
//         return {
//             ...preVal,
//             [name]:value,
//         }
//     })
// }
// const formSubmit = (e) => {
//     e.preventDefault();
//     alert(`${data.fullname} and my mobile number is ${data.phone}`)
// };
  return(
    <>
    <section>
    <div className="container contact_div">
        <div className="row">
          <div className="col-lg-10 col-12 mx-auto">
          <div className="container contact">
	<div className="row">
		<div className="col-md-4 col-12 first_box my-2">
			<div className="contact-info">
				
				<h2>
        {/* <img className="d-block" src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" width="36" height="36" /> */}
        <span className="d-inline-block"><i className="fa fa-pencil" aria-hidden="true"></i> Get in Touch</span></h2>
				<p>This site is created by my only via using HTML, CSS, React JS. Your valuable feedback are most welcome! If you have any query or suggestion feel free to contact me ?</p>
        <p><i className="fa fa-envelope-o" aria-hidden="true"></i> <strong>Email</strong><br /> khurshidweb@gmail.com</p>
        <p><i className="fa fa-mobile" aria-hidden="true"></i> <strong>Mob</strong><br /> 9540129125</p>
			</div>
		</div>
		<div className="col-md-8 col-12 second_box my-2">
			<div className="contact-form">
				<div className="form-group">
				  <label className="control-label col-sm-6" for="fname">First Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-6" for="lname">Last Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-6" for="email">Email:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-6" for="comment">Comment:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="2" id="comment"></textarea>
				  </div>
				</div>
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="btn btn-default">Submit</button>
				  </div>
				</div>
			</div>
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

export default Contact;