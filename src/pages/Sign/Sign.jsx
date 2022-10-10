import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useFetch} from "../../hooks/useFetch";


const Sign = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const account = useSelector(state => state.account)
	const error = useSelector(state => state.error)
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useFetch("POST", "http://localhost:3001/api/v1/user/login")


	const handlerSubmit = (e) => {
		e.preventDefault();
		// if (account === true) {
		// 	navigate('/transaction')
		// }

		dispatch({
			type: 'submit', user: {
				email: email,
				password: password,
			}
		})
		// if (account === false) {
		// 	alert("votre email ou votre mot de passe est incorrect")
		// }
	}

	// const userDispatch = () => {
	// 	dispatch({
	// 		type: 'submit', user: {
	// 			email: email,
	// 			password: password,
	// 		}
	// 	})
	// }

	// const sendUserToStore = () => {
	// 	if (email !== "" && password !== "") {
	// 		userDispatch()
	// 	}
	// }

	// useEffect(() => {
	// 	sendUserToStore()
	// }, [email, password]);

	const handleChangeMail = event => {
		setEmail(event.target.value);
	}

	const handleChangePassword = event => {
		setPassword(event.target.value);
	}


	// const errorMessage = () => {
	// 	if (error !== "" && account === false) {
	// 		if (email !== "" && password !== "") {
	// 			return (<p>
	// 					{error}
	// 				</p>
	// 			)
	// 		}
	// 	}
	// }


	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={(e) => handlerSubmit(e)}>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label
						><input onChange={handleChangeMail} type="text" id="username"/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label
						><input onChange={handleChangePassword} type="password" id="password"/>
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
					>Remember me</label
					>
					</div>
					{/*{errorMessage()}*/}
					<button
						className="sign-in-button">Sign In
					</button>
				</form>
			</section>
		</main>
	);
};

export default Sign;
