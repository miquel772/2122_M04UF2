import RemoveTask from './RemoveTask.js';


function ListItem (props)
{
	return(
		<li>{props.task}<RemoveTask /></li>
	);
}

export default ListItem;
