import {GET_SUBDETAIL, GET_COMMENT,GET_MUSICURL,GET_SONGLIST,GET_SONGDETAIL, GET_COMMENTMUSIC,GET_SIMIPLAYLIST,GET_SIMISONGS} from './actionTypes'
const defaultState={
    subdetail:[],
    comment:[],
    musicurl:[],
    songlist:[],
    songdetail:[],
    comentmusic:[],
    simiplaylist:[],
    simisongs:[]
}
const reducer= (state=defaultState,action)=>{
    switch(action.type){
        case GET_SUBDETAIL:
        return {
            ...state,
            subdetail:action.subdetail
        } 
        case  GET_COMMENT:
        return {
            ...state,
            comment:action.comment
        }
        case GET_MUSICURL:
        return {
            ...state,
            musicurl:action.musicurl
        } 
        case  GET_SONGLIST:
        return {
            ...state,
            songlist:action.songlist
        }
        case  GET_SONGDETAIL:
        return {
            ...state,
            songdetail:action.songdetail
        }
        case  GET_COMMENTMUSIC:
        return {
            ...state,
            commentmusic:action.commentmusic
        }
        case  GET_SIMIPLAYLIST:
        return {
            ...state,
            simiplaylist:action.simiplaylist
        }
        case  GET_SIMISONGS:
        return {
            ...state,
            simisongs:action.simisongs
        }
        default:
        return state
    }
}
export default reducer