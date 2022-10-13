import {createStore} from 'redux'

const initialState = {
	error: "",
	token: "",
	data: ""
}

const counterReducer = (state = initialState, action) => {

	if (action.type === 'submit') {
		return {
			error: state.error,
			token: state.token,
			data: state.data
		}
	}
	// if (action.type === 'haveAccount') {
	// 	return {
	// 		account: true,
	// 		error: state.error,
	// 		user: state.user,
	// 		token: state.token
	// 	}
	// }
	if (action.type === 'getUserData') {
		return {
			error: state.error,
			token: state.token,
			data: action.data
		}
	}
	if (action.type === 'getError') {
		return {
			error: action.error,
			token: state.token,
			data: state.data
		}
	}
	if (action.type === 'getToken') {
		return {
			error: action.error,
			token: action.token,
			data: state.data
		}
	}
	return state
}

export const store = createStore(counterReducer)