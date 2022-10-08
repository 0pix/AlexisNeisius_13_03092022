import {createStore} from 'redux'

const initialState = {
	account: false,
	user : {},
}

const counterReducer = (state = initialState, action) => {
	// if (action.type ==='increment'){
	// 	return {
	// 		counter: state.counter + 1,
	// 		showCounter: state.showCounter
	// 	}
	// }


	if (action.type ==='submit'){
		// console.log(action.user.mail)
		return {
			account: state.account,
			user : action.user
		}
	}






	// if (action.type ==='increase'){
	// 	return {
	// 		counter: state.counter + action.amount,
	// 		showCounter: state.showCounter
	// 	}
	// }
	// if (action.type ==='decrement'){
	// 	return {
	// 		counter: state.counter  -1,
	// 		showCounter: state.showCounter
	// 	}
	// }
	// if (action.type === 'toggle'){
	// 	 return {
	// 		 showCounter: !state.showCounter,
	// 		 counter: state.counter
	// 	 }
	// }
	return state
}




export const store = createStore(counterReducer)