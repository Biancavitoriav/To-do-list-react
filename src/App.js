import logo from './logo.svg';
import './App.css';
import Todoform from './components/todoform/Todoform.jsx';
import Todofilter from './components/todofilter/Todofilter.jsx';
import Todolist from './components/todolist/Todolist.jsx';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task 
      )
    );
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <Todoform addTask={addTask} />
      <Todofilter setFilter={setFilter} />
      <Todolist
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
