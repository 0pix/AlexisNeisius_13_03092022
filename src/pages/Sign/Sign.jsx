import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {request} from "../../helper/fetch";


function Sign() {
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const error = useSelector(state => state.error)
	const token = useSelector(state => state.token)


	const getError = (error) => {
		dispatch({type: 'getError', error: error})
	}

	const getToken = (token) => {
		dispatch({type: 'getToken', token: token})
	}


	const handlerSubmit = async (e) => {
		e.preventDefault();

		const body = JSON.stringify({
			"email": e.target[0].value,
			"password": e.target[1].value
		})

		const headers = {
			'Content-Type': 'application/json',
		}

		console.log('Submit')
		console.log(e.target[0].value)
		console.log(e.target[1].value)

		const test = await request("POST", "http://localhost:3001/api/v1/user/login", body, headers)
		// console.log(test.body.token)
		if (test.status === 400) {
			getError(test.message)
		}
		if (test.status === 200) {
			getToken(test.body.token)
			navigate('/transaction')
		}
	}
	// exécuter le call du fetch ici, puis le dispatch vers le store du token

	// const errorMessage = () => {
	// 	if (token === "" && error !== "") {
	// 		return (<p style={{color: "red"}}>
	// 				{error}
	// 			</p>
	// 		)
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
						><input type="text" id="username"/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label
						><input type="password" id="password"/>
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
}


export default Sign;
