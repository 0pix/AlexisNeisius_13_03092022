import React from 'react';
import argentBankLogo from '../../assets/img/argentBankLogo.png'
import {Link}from 'react-router-dom'

const Header = () => {
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
					Sign In
				</a>
			</div>
		</nav>
	);
};

export default Header;

// <div className={'header'}>
// 	<a>
// 		<img src={argentBankLogo} alt="Logo" />
// 	</a>
// 	<div className={login}>
// 		<div className={user}></div>
// 		<div className={sign}></div>
// 	</div>
// </div>