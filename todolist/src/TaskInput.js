import React from 'react';

import TextField from '@mui/material/TextField';

import {Box} from '@mui/material'

class TaskInput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: ""
		};
	}

	handleChange = (event) => {
		//console.log(event.target.value);
		this.props.handleChange(event);
		
		this.setState({
			value: event.target.value
		});
		event.preventDefault();
	}

	render() {
		return (
		<Box sx={{width: '400', maxWidth: '100%',}}>
		<TextField fullWidth variant="filled" label="Tarea" onChange={this.handleChange} value={this.props.value}/>
		</Box>
		);
	}
}

export default TaskInput;
