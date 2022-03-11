import logo from './logo.svg';
import './App.css';
import Title from './Title.js';
import Form from './Form.js';
import TaskList from './TaskList.js';

function App() {
  return (
    <div className="App">
	<Title />
	<Form />
	<TaskList />
    </div>
  );
}

export default App;
