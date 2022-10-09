import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {useFetch} from "../../hooks/useFetch";
import {store} from "../../store";




const Sign = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const account = useSelector(state => state.account)
	const error = useSelector(state => state.error)
	// const maill = useSelector(state => state.user.email)
	// const password = useSelector(state => state.user.password)
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");

		useFetch("POST", "http://localhost:3001/api/v1/user/login")
  // Si les deux inputs ne sont pas vide, on dispatch user
	// submit = navigate
	const handlerSubmit = (e) => {
		e.preventDefault();
		dispatch({type: 'submit', user: {
			email : e.target[0].value,
			password  :	e.target[1].value,
			}})
		if (account === true){
			navigate('/transaction')
		}
		//  console.log(e.target[0].value)
		// console.log(e.target[1].value)
		// console.log(e.target[2].value)
	}


	console.log(account)

	return (
		<main className="main bg-dark">
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
					{error != null ? <p style={{color: "red",fontSize: "1.2em"}}>{error}</p> : null}
					<button  className="sign-in-button">Sign In</button>
				</form>
			</section>

		</main>
	);
};

export default Sign;
