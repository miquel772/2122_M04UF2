
function SubmitForm()
{
	return(
		<button onClick={function(event){
			event.preventDefault();
			console.log("Hola");
			}
		}>Add</button>

	);
}

export default SubmitForm;
