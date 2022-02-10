import './App.css';
import {useState} from 'react';
import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel } from '@mui/material';
import Todo from './Todo';

function App() {
  // we have hardcoded some tasks, these task will be erased after refreshed 
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //This runs when we click the button
  const addTodo = (event) => {
    event.preventDefault(); //It will stop refreshing the page
    setTodos([...todos, input]) //Whatever task we will give, it will save in input and setTodos will print that input in the todos list
    setInput(''); //As we were adding some task it wasn't clearing, this piece of code will clear the input field for us every time we enter something
  }


  return (
    <div className="App">
      <h2>Add a Todo:</h2>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
      <Button type="submit" disabled={!input} onClick={addTodo} variant="contained" color="success">
      Add Me
      </Button>
      </form>
       
      <ul>
        {/* todos is the name of an array, We use map to traverse through array, we are saving tasks in todo and printing those task as li's */}
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
