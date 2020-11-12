import React,{Component} from 'react';
//import ReactDom from 'react-dom';
import Avatarlist from './Avatarlist';
import './Avatar.css';
import 'tachyons';


const Avatar = (props) => {

	const avatarlistarray = [
	{
		id:1,
		name:"Khurshid",
		work:"Sr. Front End Developer"
	},
	{
		id:2,
		name:"Ashraf",
		work:"Managing Director"
	},
	{
		id:3,
		name:"Arshan",
		work:"Senior Engineer"
	},
	{
		id:4,
		name:"Hina",
		work:"House WIfe"
	}			
	]

	const arrayvarcard =  avatarlistarray.map( (avatarcard, i) => {
		return <Avatarlist id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />
	})

	return 		( <div class="mainpage">
		<h1> Welcome to Avatar World! {2+5}</h1>
		{arrayvarcard}
		<button className="tl">Subscribe</button>
		</div>
		)
}



export default Avatar;