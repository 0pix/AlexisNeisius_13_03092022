import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
// const dispatch = useDispatch()



/**
 * Hooks to get data from Api or from mock of the user
 *
 * @param url  endpoints of the data from the API
 * @param mock Boolean, set on true to use the mock
 * @param dataMock data from mock
 * @param id number, id from the current user
 *
 * @return { data, error }
 * @author Alexis.N
 * @version 1.0
 */

export const useFetch = (method, url) => {
	const user = useSelector(state => state.user)
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	// console.log(user)


	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(
			user
		)
	};

	// const requestOptions = {
	// 	method: 'POST',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify({
	// 		"email": "tony@stark.com",
	// 		"password": "password123"
	// 	})
	// };

	const fetchData = () => {
		if (method === "POST") {
			fetch("http://localhost:3001/api/v1/user/login", {
				method: "POST",
				body: JSON.stringify({
					"email": "tony@stark.com",
					"password": "password123"
				}),
			})
				.then(function (res) {
					console.log(res)
					return res.json();
				})
				.then(function (data) {
					setData(data);
				})
				.catch(function (err) {
					console.log(err, ' error');
					setError(err);
				});
		}
	};

	useEffect(() => {
		fetchData();
	}, [user]);

	return { data, error };
};