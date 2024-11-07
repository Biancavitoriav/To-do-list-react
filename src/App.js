import logo from './logo.svg';
import './App.css';
import Todoform from './components/todoform/Todoform.jsx';
import Todofilter from './components/todofilter/Todofilter.jsx';
import Todolist from './components/todolist/Todolist.jsx';
import { useState } from 'react';


function App() {
  const [tarefas, setTarefas] = useState([])
  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa]); 
  };
  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <Todoform adicionarTarefa={adicionarTarefa}></Todoform>
      <Todofilter></Todofilter>
      <Todolist tarefas={tarefas}></Todolist>
    </div>
  );
}

export default App;
