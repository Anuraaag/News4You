import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (

      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News pageSize={3} country="in" category="general" key="general"/>} ></Route>
            <Route exact path="/business" element={<News pageSize={3} country="in" category="business" key="business"/>} ></Route>
            <Route exact path="/entertainment" element={<News pageSize={3} country="in" category="entertainment" key="entertainment"/>} ></Route>
            <Route exact path="/general" element={<News pageSize={3} country="in" category="general" key="general"/>} ></Route>
            <Route exact path="/health" element={<News pageSize={3} country="in" category="health" key="health"/>} ></Route>
            <Route exact path="/science" element={<News pageSize={3} country="in" category="science" key="science"/>} ></Route>
            <Route exact path="/sports" element={<News pageSize={3} country="in" category="sports" key="sports"/>} ></Route>
            <Route exact path="/technology" element={<News pageSize={3} country="in" category="technology" key="technology"/>} ></Route>
          </Routes>
        </Router>
      </>

    )
  }
}

