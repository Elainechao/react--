import http from 'utils/fetch'
import {
    GET_LOGIN
} from './actionTypes'

const getLoginSync=login=>({
    type: GET_LOGIN,
    login
})
const getLoginAsync =(id) =>{
    return async dispatch =>{
        let result = await http.get('/api/user/detail?uid='+id)
        if(result.code === 200 ){
            dispatch(getLoginSync(result))
        }
    }
}
export{
    getLoginSync,
    getLoginAsync 
}