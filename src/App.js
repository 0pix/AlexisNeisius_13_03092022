import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Profil from "./pages/Profil/Profil";
import Transaction from "./pages/Transaction/Transaction";
import Header from "./pages/layouts/Header";
import Footer from "./pages/layouts/Footer";
import Home from "./pages/Home/Home";
import Sign from "./pages/Sign/Sign";


function App() {
	return (
		<Router>
			<div className="app">
			<Header/>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
				<Routes>
					<Route path="/sign" element={<Sign/>}/>
				</Routes>
				<Routes>
					<Route path="/transaction" element={<Transaction/>}/>
				</Routes>
			<Footer/>
			</div>
		</Router>
	);
}

export default App;
