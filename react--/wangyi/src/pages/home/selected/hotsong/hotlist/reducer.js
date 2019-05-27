import {
    GET_HOTLIST
}from './actionTypes'

const defaultState={
    hotlist:{}
}
const reducer =(state =defaultState,action)=>{
    switch(action.type){
        case GET_HOTLIST:
            return{
                ...state,
                hotlist:action.hotlist
            }
            default:
                return state
    }
}
export default reducer