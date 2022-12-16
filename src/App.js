import './App.css';
import { Todos } from './components/Todos';
import { Welcome } from './components/Welcome';
import React, { useState, useEffect } from 'react';
import { Footer } from './components/Footer';
import { AddTodo } from './components/AddTodo';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/About';

function App() {
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const showTodos = () => {
    alert("Clicked.");
  }

  const addTodo = (name, mobile) => {
    let id;
    if (todos.length == 0) {
      id = 1;
    } else {
      id = todos[todos.length - 1].id + 1;
    }

    let myTodo = {
      id: id,
      name: name,
      mobile: mobile,
    }
    setTodos([...todos, myTodo]);

    alert("Todo Added Successfully!!!");


  }



  const btndelete = (todo) => {
    // console.log("delte", todo.mobile);
    setTodos(todos.filter((e) => {
      return e != todo;
    }))
  }

  const [todos, setTodos] = useState(initTodos);

  useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos)); }, [todos]);


  return (


    <div>

      <BrowserRouter>

        <Header />
        <Routes>

          <Route path='/' element={<Welcome todos={showTodos} />} />

          <Route path='/addtodo' element={<AddTodo addTodo={addTodo} />} />


          <Route path='showtodo' element={<Todos todos={todos} btnDelete={btndelete} />} />

          <Route path='about' element={<About />} />

        </Routes>

        <Footer />
      </BrowserRouter>



    </div >
  );
}

export default App;
