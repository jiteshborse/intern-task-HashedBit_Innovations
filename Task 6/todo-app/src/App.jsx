import { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todo_list, setTodoList] = useState([]);
  const [todo_name, setTodoName] = useState('');

  const saveTodoData = (event) => {
    event.preventDefault();
    const newTodo = event.target.todo_name.value;
    
    if (!todo_list.includes(newTodo)) {
      const final_todo_list = [...todo_list, newTodo];
      setTodoList(final_todo_list);
      setTodoName('');
    } else {
      alert(`${newTodo} already exists in your list`);
    }
  };

  const deleteRow = (index) => {
    const final_data = todo_list.filter((v, i) => i !== index);
    setTodoList(final_data);
  };

  return (
    <div className="outer-div">
      <h1>TODO List</h1>
      
      <form className="form-tag" onSubmit={saveTodoData}>
        <input 
          type="text" 
          name="todo_name" 
          value={todo_name}
          onChange={(e) => setTodoName(e.target.value)}
          placeholder="Enter your todo"
        />
        <button type="submit">Save</button>
      </form>

      <div className="todo-list">
        <ul>
          {todo_list.map((value, index) => (
            <TodoItem 
              key={index}
              value={value} 
              index={index}
              todo_list={todo_list}
              setTodoList={setTodoList}
              deleteRow={deleteRow}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
