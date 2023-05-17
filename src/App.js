// import logo from './logo.svg';
import './App.css';
import Heading from './TodoComp/heading';
import Input from './TodoComp/Input';
import MyButton from './TodoComp/MyButton';
import MyOutput from './TodoComp/MyOutput';
import React, { useState } from 'react';
function App() {
  const [todoList,setTodoList] = useState([]);
  const [input,setInput] = useState("");
  
  return (
    <div>
      <Heading />
      <Input input={input} setInput={setInput} todoList={todoList} setTodoList={setTodoList} />
      <MyButton input={input} setInput={setInput} todoList={todoList} setTodoList={setTodoList} />
      <MyOutput todoList={todoList}/>
    </div>
  );
}

export default App;
