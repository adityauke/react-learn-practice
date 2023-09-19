import './App.css';
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [globalKey, setGlobalKey] = useState(0);

  function addToDO(e) {
    e.preventDefault();
    if (task !== "") {
      setTodo((oldTodo) => {
        setTask("");
        return [...oldTodo, { todo: task, id: globalKey }];
      });
      setGlobalKey(prevKey => prevKey + 1);
    }
  }

  function deleteTodo(itemId) { 
    setTodo(oldTodo => oldTodo.filter(item => item.id !== itemId));
  }

  return (
    <form>
      <div className="App">
        <h1>TO-DO List</h1>
        <input type="text" value={task} onChange={e => setTask(e.target.value)} placeholder='Enter ToDo...' />
        <button onClick={addToDO} type='submit'>Submit</button>

        <div className="todoList">
          <ul>
            {todo.map((items) => {
              return (
                <div key={items.id}> 
                  <ol>{items.todo}{/*....({items.id})*/}<button className="delBtn" onClick={() => deleteTodo(items.id)}>X</button></ol>
                  
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </form>
  );
}

export default App;
