import {createStore} from 'redux'

const initialState = {
	account: false,
	error: "",
	token: "",
	user: {
		email: "null",
		password: "null"
	},
}

const counterReducer = (state = initialState, action) => {

	if (action.type === 'submit') {
		return {
			account: state.account,
			error: state.error,
			user: action.user,
			token: state.token
		}
	}
	if (action.type === 'haveAccount') {
		return {
			account: true,
			error: state.error,
			user: state.user,
			token: state.token
		}
	}
	if (action.type === 'dontHaveAccount') {
		return {
			account: state.account,
			error: state.error,
			user: state.user,
			token: state.token
		}
	}
	if (action.type === 'getError') {
		return {
			account: false,
			error: action.error,
			user: state.user,
			token: state.token
		}
	}
	if (action.type === 'getToken') {
		return {
			account: false,
			error: action.error,
			user: state.user,
			token: action.token
		}
	}
	return state
}

export const store = createStore(counterReducer)