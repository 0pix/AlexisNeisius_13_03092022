import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {request} from "../../helper/fetch";
import EditName from "./EditName/EditName";

const Profile = () => {
	const token = useSelector(state => state.token)
	const data = useSelector(state => state.data)
	const dispatch = useDispatch()
	// const firstName = useSelector(state => state.data.firstName)

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
		}
		if (test.status === 200) {
			getUserData(test.body)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	console.log('transaction')
	// console.log(firstName)

	if (!token) {
		return <main className={'noToken'}>Veuillez vous connecter.</main>
	}

	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>Welcome back<br/>{data.firstName} {data.lastName}</h1>
				<EditName/>
			</div>
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
		</main>
	);
};

export default Profile;
