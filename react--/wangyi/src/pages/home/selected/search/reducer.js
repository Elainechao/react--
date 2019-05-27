import {
    GET_HOTSEARCH
}from './actionTypes'

const defaultState ={
    hotsearch:{}
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_HOTSEARCH:
            return {
                ...state,
                hotsearch:action.hotsearch
            }
        default:
            return state
    }
}
export default reducer