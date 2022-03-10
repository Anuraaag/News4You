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
  pageSize = 9
  render() {
    return (

      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News pageSize={this.pageSize} country="in" category="General" key="general"/>} ></Route>
            <Route exact path="/business" element={<News pageSize={this.pageSize} country="in" category="Business" key="business"/>} ></Route>
            <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country="in" category="Entertainment" key="entertainment"/>} ></Route>
            <Route exact path="/general" element={<News pageSize={this.pageSize} country="in" category="General" key="general"/>} ></Route>
            <Route exact path="/health" element={<News pageSize={this.pageSize} country="in" category="Health" key="health"/>} ></Route>
            <Route exact path="/science" element={<News pageSize={this.pageSize} country="in" category="Science" key="science"/>} ></Route>
            <Route exact path="/sports" element={<News pageSize={this.pageSize} country="in" category="Sports" key="sports"/>} ></Route>
            <Route exact path="/technology" element={<News pageSize={this.pageSize} country="in" category="Technology" key="technology"/>} ></Route>
          </Routes>
        </Router>
      </>

    )
  }
}

