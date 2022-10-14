import React, {useState} from 'react';
import './EditName.css'
import {useDispatch, useSelector} from "react-redux";
import {request} from "../../helper/fetch";


const EditName = () => {
	const dispatch = useDispatch()
	const buttonEdit = useSelector(state => state.buttonEdit)
	const token = useSelector(state => state.token)
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const toggleInputs = () => {
		dispatch({type: 'editName'})
	}

	const saveName = async () => {
		const body = JSON.stringify({
			"firstName": firstName,
			"lastName": lastName
		})
		const headers = {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}

		const test = await request("PUT", "http://localhost:3001/api/v1/user/profile", body, headers)

		if (test.status === 400) {
			console.log(400, test)
		}
		if (test.status === 200) {
			console.log(200, test)
			// getUserData(test.body)
			// navigate('/transaction')
		}
		// console.log(firstName, lastName)
		console.log(body)

	}
	return (
		<div className={'editName'}>
			{!buttonEdit && <button onClick={() => toggleInputs()} className="edit-button">Edit Name</button>}
			{buttonEdit && <div>
				<div className={'editNameInput'}>
					<input onChange={(e) => setFirstName(e.target.value)} type="text" id="first-name" placeholder={'First Name'}/>
					<input onChange={(e) => setLastName(e.target.value)} type="text" id="last-name" placeholder={'Last Name'}/>
				</div>
				<div className={'buttonSave'}>
					<button onClick={() => saveName()} className="edit-button">Save</button>
					<button onClick={() => toggleInputs()} className="edit-button">Cancel</button>
				</div>
			</div>}
		</div>
	);
};

export default EditName;
