import types from '../types'
const loginAction = {
    login:(user)=>{
        console.log(user)
        return  {
        type:types.LOGIN,
        payload:user
    }}
}

export default loginAction