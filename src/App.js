import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
	return (
		<Router>
			<Header/>
			<div className="App">
				<Routes>
					<Route path="/profil" element={<Profil/>}/>
				</Routes>
				<Routes>
					<Route path="/profil/:id" element={<Profil/>}/>
				</Routes>
			</div>
			<Footer/>
		</Router>
	);
}

export default App;
