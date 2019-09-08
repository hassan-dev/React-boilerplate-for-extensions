import types from '../types'
const initState = { 
    user:'ali'
 }


export default function loginReducer(state = initState, action) { 
    switch (action.type) {
        case "LOGIN":
        console.log("login reducer ", action);
        return Object.assign({}, state, {
            user: action.payload
        });
        default:
             return state;
    }
}