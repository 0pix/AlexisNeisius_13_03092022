import React, {useEffect} from 'react';
import argentBankLogo from '../../assets/img/argentBankLogo.png'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {request} from "../../helper/fetch";

const Header = () => {
	const token = useSelector(state => state.token)
	const data = useSelector(state => state.data)
	const dispatch = useDispatch()

	const getError = (error) => {
		dispatch({type: 'getError', error: error})
	}

	const getUserData = (data) => {
		dispatch({type: 'getUserData', data: data})
	}

	const getData = async (e) => {
		const body = ""
		const headers = {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}

		const test = await request("POST", "http://localhost:3001/api/v1/user/profile", body, headers)

		if (test.status === 400) {
			// console.log(400, test)
		}
		if (test.status === 200) {
			// console.log(200, test.body)
			getUserData(test.body)
			// navigate('/transaction')
		}
	}

	useEffect(() => {
		getData()
	}, [token])

	console.log(data)

	return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img
					className="main-nav-logo-image"
					src={argentBankLogo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			{data.firstName}
			<div>

				<a className="main-nav-item" href="/Sign">
					<i className="fa fa-user-circle"></i>
					{token ? "Sign out" : "Sign in"}
				</a>
			</div>
		</nav>
	);
};

export default Header;
