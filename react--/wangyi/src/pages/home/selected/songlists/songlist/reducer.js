import {
    GET_LIST,
    GET_ITEM
} from './actionTypes'

const defaultState ={
    list:[],
    item:[]
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case GET_LIST:
        return{
            ...state,
            list:action.list
        }
        case GET_ITEM:
        return {
            ...state,
            item:action.item
        }
        default:
            return state
    }
}