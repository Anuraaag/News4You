import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
	pageSize = 6

	state = {
		progress: 0
	}	
	setProgress = value => {
		this.setState({progress: value})
	}

	render() {
		return (

			<>
				<Router>
					<LoadingBar color="#f11946" progress={this.state.progress} 
					/>
					{/* onLoaderFinished={() => setProgress(0)}  */}

					<Navbar />
					<Routes>
						<Route exact path="/" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="General" key="general" />} ></Route>
						<Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="Business" key="business" />} ></Route>
						<Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="Entertainment" key="entertainment" />} ></Route>
						<Route exact path="/general" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="General" key="general" />} ></Route>
						<Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="Health" key="health" />} ></Route>
						<Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="Science" key="science" />} ></Route>
						<Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="Sports" key="sports" />} ></Route>
						<Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="Technology" key="technology" />} ></Route>
					</Routes>
				</Router>
			</>

		)
	}
}

