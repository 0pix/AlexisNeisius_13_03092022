import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link}from 'react-router-dom'
import {useFetch} from "../../hooks/useFetch";
import SimpleForm from "../../components/test form/formTest";
import {store} from "../../store";




const Sign = () => {
	const dispatch = useDispatch()
	const account = useSelector(state => state.account)
	const maill = useSelector(state => state.user.mail)
	const password = useSelector(state => state.user.password)
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");

	const handlerSubmit = (e) => {
		e.preventDefault();
		dispatch({type: 'submit', user: {
			mail : e.target[0].value,
			password  :	e.target[1].value,
			}})
		//  console.log(e.target[0].value)
		// console.log(e.target[1].value)
		// console.log(e.target[2].value)
	}

		useFetch("POST", "http://localhost:3001/api/v1/user/login")
	// const getMailHandler = (mail) => {
	// 	dispatch({type: 'submit', email: mail })
	// }
	 // const Username =




	return (
		<main className="main bg-dark">
			<button onClick={()=>	console.log(maill, password ) }>Clic</button>
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={(e) => handlerSubmit(e)}>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label
						><input type="text" id="username"/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label
						><input  type="password" id="password"/>
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
					>Remember me</label
					>
					</div>
					<button  className="sign-in-button">Sign In</button>
					{/*<Link  className="sign-in-button" to={account ? "/transaction" : null}>Sign In</Link>*/}
					{/*() => {useFetch()}*/}
				</form>
			</section>

		</main>
	);
};

export default Sign;
