import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";


export const useFetch = (method, url) => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user)
	const account = useSelector(state => state.account)
	const error = useSelector(state => state.error)

	const [data, setData] = useState(null);
	const [token, setToken] = useState(null);
	// const [error, setError] = useState(null);

	const haveAccount = () => {
		dispatch({type: 'haveAccount'})
	}

	const dontHaveAccount = () => {
		dispatch({type: 'dontHaveAccount'})
	}

	const getError = (error) => {
		dispatch({type: 'getError', error : error})
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
					if (data.status === 400){
					dontHaveAccount()
					getError(data.message)
					console.log(data.message)
					// setError(data.message)
					setToken(null)
					}
					if (data.status === 200){
						haveAccount()
						setToken(data.body.token)
						// setError(null)
					}
				})
				.catch(function (err) {
					console.log(err, ' error');
					// setError(err);
				});
		}
	};
		// console.log(token)
		console.log(error)
		// console.log(account)

	useEffect(() => {
		fetchData();
	}, [user]);

	return { data, error };
};