import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


export const useFetch = (method, url) => {
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const user = useSelector(state => state.user)
	const account = useSelector(state => state.account)
	const error = useSelector(state => state.error)
	const token = useSelector(state => state.token)
	const [data, setData] = useState(null);

	const haveAccount = () => {
		dispatch({type: 'haveAccount'})
	}

	const dontHaveAccount = () => {
		dispatch({type: 'dontHaveAccount'})
	}

	const getError = (error) => {
		dispatch({type: 'getError', error: error})
	}

	const getToken = (token) => {
		dispatch({type: 'getToken', token: token})
	}


	const fetchData = () => {

		if (method === "POST") {
			fetch("http://localhost:3001/api/v1/user/login", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					"email": user.email,
					"password": user.password
				}),
			})
				.then(function (res) {
					return res.json();
				})
				.then(function (data) {
					setData(data);
					if (data.status === 400) {
						dontHaveAccount()
						getError(data.message)
					}
					if (data.status === 200) {
						console.log(data)
						haveAccount()
						getToken(data.body.token)
						navigate('/transaction')
					}
				})
				.catch(function (err) {
					console.log(err, ' error');
				});
		}
	};
	// console.log(token)
	// console.log(error)
	// console.log(user)
	// console.log(account)
	// console.log(data)
	console.log(token)
	// console.log("useFetch")

	useEffect(() => {
		fetchData();
	}, [user]);

	return {data, error};
};