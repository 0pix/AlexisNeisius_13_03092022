import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Profile from "./pages/Profile/Profile";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home/Home";
import Sign from "./pages/Sign/Sign";
import {useSelector} from "react-redux";


function App() {
	const token = useSelector(state => state.token)
	return (
		<Router>
			<div className="app">
				<Header/>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
				<Routes>
					<Route path="/login" element={<Sign/>}/>
				</Routes>
				<Routes>
					<Route path="/profile" element={<Profile/>}/>
				</Routes>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
