import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './Demo.css';

class Demo extends Component{
	render(){
		return <div className="maindiv_style">
		<h1> Hello {this.props.name} </h1>
		<p>My Name is Khurshid Ali</p>
		</div>
	}
}

export default Demo;