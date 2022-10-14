import React, {useEffect} from 'react';
import argentBankLogo from '../../assets/img/argentBankLogo.png'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {request} from "../../helper/fetch";

const Header = () => {
	const token = useSelector(state => state.token)
	const data = useSelector(state => state.data)


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
