import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'



const App = () => {

	const pageSize = 6
	const [progress, setProgress] = useState(0)


	return (

		<>
			<Router>
				<LoadingBar color="#f11946" progress={progress}
				/>

				<Navbar />
				<Routes>
					<Route exact path="/" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="General" key="general" />} ></Route>
					<Route exact path="/business" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="Business" key="business" />} ></Route>
					<Route exact path="/entertainment" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="Entertainment" key="entertainment" />} ></Route>
					<Route exact path="/general" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="General" key="general" />} ></Route>
					<Route exact path="/health" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="Health" key="health" />} ></Route>
					<Route exact path="/science" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="Science" key="science" />} ></Route>
					<Route exact path="/sports" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="Sports" key="sports" />} ></Route>
					<Route exact path="/technology" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="Technology" key="technology" />} ></Route>
				</Routes>
			</Router>
		</>

	)
}

export default App