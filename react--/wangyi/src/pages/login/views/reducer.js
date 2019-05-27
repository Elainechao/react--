import {GET_LOGIN} from './actionTypes'
const defaultState={
    login:''
}
const reducer =(state=defaultState,action)=>{
    switch(action.type){
    case GET_LOGIN:
    return {
        ...state,
        login:action.login
    } 
    default:
        return state
}
}
export default reducer