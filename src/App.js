// import logo from './logo.svg';
import './App.css';
import Heading from './TodoComp/heading';
import Input from './TodoComp/Input';
import MyButton from './TodoComp/MyButton';
import MyOutput from './TodoComp/MyOutput';
import React, { useState } from 'react';
import Clear from './TodoComp/Clear';
function App() {
  const [todoList,setTodoList] = useState([]);
  const [input,setInput] = useState("");
  
  return (
    <div>
      <Heading />
      <Input input={input} setInput={setInput} todoList={todoList} setTodoList={setTodoList} />
      <MyButton input={input} setInput={setInput} todoList={todoList} setTodoList={setTodoList} />
      <Clear setTodoList={setTodoList}/>
      <MyOutput todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
