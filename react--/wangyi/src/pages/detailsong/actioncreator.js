import http from 'utils/fetch'
import {
    GET_SUBDETAIL,
    GET_COMMENT,
    GET_MUSICURL,
    GET_SONGLIST,
    GET_SONGDETAIL,
    GET_COMMENTMUSIC,
    GET_SIMIPLAYLIST,
    GET_SIMISONGS
} from './actionTypes'

const getSubdetailSync=subdetail =>({
    type:GET_SUBDETAIL,
    subdetail
})
const getCommentSync=comment =>({
    type:GET_COMMENT,
    comment
})
const getMusicurlSync=musicurl =>({
    type:GET_MUSICURL,
    musicurl
})
const getSonglistSync=songlist =>({
    type:GET_SONGLIST,
    songlist
})
const getSongdetailSync=songdetail =>({
    type:GET_SONGDETAIL,
    songdetail
})
const getCommentmusicSync=commentmusic =>({
    type:GET_COMMENTMUSIC,
    commentmusic
})
const getSimiplaylistSync=simiplaylist =>({
    type:GET_SIMIPLAYLIST,
    simiplaylist
})
const getSimisongsSync=simisongs =>({
    type:GET_SIMISONGS,
    simisongs
})
const getDetailAsync =(id)=>{
    return async dispatch =>{
        let result =await http.get('/api/playlist/detail?id='+id)
        let result1=await http.get('/api/comment/playlist?id='+id)
        if(result.code === 200 && result1.code===200 ){
            dispatch(getSubdetailSync(result))
            dispatch(getCommentSync(result1))
        }
    }
}
const getMusicurlAsync =(id)=>{
    return async dispatch =>{
        let result2=await http.get('/api/song/url?id='+id)
        if(result2.code===200){
            dispatch(getMusicurlSync(result2))
        }

    }
}
const getSonglistAsync =(id)=>{
    return async dispatch =>{
        let result3=await http.get('/api/lyric?id='+id)
        if( result3.code===200 ){
            dispatch(getSonglistSync(result3.lrc))
        }
    }

}
const getSongdetailAsync =(id)=>{
    return async dispatch =>{
        let result4=await http.get('/api/song/detail?ids='+id)
        if( result4.code===200 ){
            dispatch(getSongdetailSync(result4))
        }

    }
}
const getCommentmusicAsync =(id)=>{
    return async dispatch =>{
        let result5=await http.get('/api/comment/music?id='+id)
        if(result5.code===200){
            dispatch(getCommentmusicSync(result5))
        }
    }
}
const getSimiplaylistAsync =(id)=>{
    return async dispatch =>{
        let result6=await http.get('/api/simi/playlist?id='+id)
        if( result6.code===200 ){
            dispatch(getSimiplaylistSync(result6))
        }

    }
}
const getSimisongsAsync =(id)=>{
    return async dispatch =>{
        let result7=await http.get('/api/simi/song?id='+id)
        if(result7.code===200){
            dispatch(getSimisongsSync(result7))
        }
    }
}
export{
    getDetailAsync,
    getSubdetailSync,
    getCommentSync,
    getMusicurlSync,
    getSonglistSync,
    getSongdetailSync,
    getCommentmusicSync,
    getSimiplaylistSync,
    getSimisongsSync,
    getSonglistAsync,
    getSimiplaylistAsync,
    getCommentmusicAsync,
    getSongdetailAsync,
    getMusicurlAsync,
    getSimisongsAsync

}