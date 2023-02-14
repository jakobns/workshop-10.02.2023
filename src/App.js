import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Todos from './components/Todos';
import Forms from './components/Form';
import Button from './components/Button';
import { useState } from 'react';

const todoStart =[
  {
    id:0,
    title: "lage middag",
    content: "Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet",
  }
]

function App() {
  const [todo, setTodo] = useState({title: "", content: ""})
  const [todos, setTodos] = useState([...todoStart])
  const [id, setId] = useState(1)

  const addToDo = ()  =>{
    const inputName = Event.target.name
    const inputValue = Event.target.value
    setTodo((prev) => ({...prev, [inputName]: inputValue}))
  }

  const handleClick = () => {
    setId((prev) => + 1)
    setTodos((prev) => [
      {id, titl: todo.title, content: todo.content}, ...prev
    ])
  }

  return (
    <>
    <NavBar username="JakobNS"/>
    <section>
    <form handleClick={handleClick} addToDo={addToDo} todo={todo}/>
    </section>
    <Todos todoStart={todos}/>

    </>

  );
}

export default App;
