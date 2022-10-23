import React, {useEffect} from 'react';
import argentBankLogo from '../../assets/img/argentBankLogo.png'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {request} from "../../helper/fetch";
import userIcon from "../../assets/img/svg/user.svg"
import "./Header.css"

const Header = () => {
	const token = useSelector(state => state.token)
	const data = useSelector(state => state.data)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	console.log('header')

	const signOut = () => {
		dispatch({type: 'signOut'})
	}

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
			<div className={'nameSign'}>
				{token && <Link to={'/profile'} className={'userButton'}>
					<div className={'userIcon'}><img src={userIcon} alt="Logo"/></div>
					{data.firstName}
				</Link>}
				{token && <Link onClick={() => {
					signOut()
				}} className="main-nav-item" to="/">Sign out</Link>}
				{!token && <Link className="main-nav-item" to="/login"> Sign in</Link>}
				{/*<Link className="main-nav-item" href="/"> Deco</Link>*/}
			</div>
		</nav>
	);
};

export default Header;
