import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./components/home";
import Hello from "./components/one";
import ClickList from './components/click-list';
import Counter from './components/counter';
import List from './components/list';
import Form from './components/form';
import StyledList from './components/styled-list';
import Cards from './components/cards';
import Filter from './components/filter';

import './App.css';
import jokes from './data/jokes';

class App extends Component {
  render() {
    function Header() {
      return (
        <div>
          <h1>Short React Exercises</h1>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/exercise-one">Exercise 1</Link> |{" "}
            <Link to="/exercise-two">Exercise 2</Link> |{" "}
            <Link to="/exercise-three">Exercise 3</Link> |{" "}
            <Link to="/exercise-four">Exercise 4</Link> |{" "}
            <Link to="/exercise-five">Exercise 5</Link> |{" "}
            <Link to="/exercise-six">Exercise 6</Link> |{" "}
            <Link to="/exercise-seven">Exercise 7</Link> |{" "}
            <Link to="/exercise-eight">Exercise 8</Link> |{" "}
            <Link to="/exercise-nine">Exercise 9</Link>
          </nav>
        </div>
      );
    }

    return (
      <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise-one" element={<Hello name="World" />} />
            <Route path="/exercise-two" element={<ClickList buttons={['']}/>} />
            <Route path="/exercise-three" element={<ClickList buttons={['1', '2', '3']}/>} />
            <Route path="/exercise-four" element={<Counter />} />
            <Route path="/exercise-five" element={<List items={['🐶 dog', '🐱 cat', '🐥 chicken', '🐮 cow', '🐑 sheep', '🐴 horse']}/>} />
            <Route path="/exercise-six" element={<Form />} />
            <Route path="/exercise-seven" element={<StyledList data={jokes} />} />
            <Route path="/exercise-eight" element={<Cards />} />
            <Route path="/exercise-nine" element={<Filter />} />
          </Routes>
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
