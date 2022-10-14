import {createStore} from 'redux'

const initialState = {
	error: "",
	token: "",
	data: "",
	buttonEdit: false
}

const counterReducer = (state = initialState, action) => {

	if (action.type === 'submit') {
		return {
			error: state.error,
			token: state.token,
			data: state.data,
			buttonEdit: state.buttonEdit
		}
	}

	if (action.type === 'getUserData') {
		return {
			error: state.error,
			token: state.token,
			data: action.data,
			buttonEdit: state.buttonEdit
		}
	}
	if (action.type === 'getError') {
		return {
			error: action.error,
			token: state.token,
			data: state.data,
			buttonEdit: state.buttonEdit
		}
	}
	if (action.type === 'getToken') {
		return {
			error: action.error,
			token: action.token,
			data: state.data,
			buttonEdit: state.buttonEdit
		}
	}
	if (action.type === 'editName') {
		return {
			error: state.error,
			token: state.token,
			data: state.data,
			buttonEdit: !state.buttonEdit
		}
	}


	return state
}

export const store = createStore(counterReducer)