import React from 'react';
import TaskItem from './TaskItem';

import {Box, Grid, List} from '@mui/material';

class TaskList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasks : props.tasks,
			tasks_id : props.tasks_id
		};
	}

	render ()
	{
		let t = this.state.tasks;

		let tasks = [];
		for (let i = 0; i < t.length; i++){
			tasks.push(<TaskItem 	task={t[i]} 
									key={i}
									order={i}
									task_id={this.state.tasks_id[i]}
									removeTask={this.props.removeTask} />);
		}

		return (
		<Box sx={{width:'400', bgcolor:'#cfe1b9'}}>
			<List>
				<Grid container sx={{color: 'text.primary' }}>
					{tasks}
				</Grid>
			</List>
		</Box>


		);
	}
}

export default TaskList;
