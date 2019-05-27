import http from 'utils/fetch'
import {
    GET_HOTLIST
} from './actionTypes'

const getHotlistSync=hotlist =>({
    type:GET_HOTLIST,
    hotlist
})
const getHotlistAsync =()=>{
    return async dispatch =>{
        let result =await http.get('/api/top/list?idx=1')
        dispatch(getHotlistSync(result.playlist))
    }
}
export{
    getHotlistSync,
    getHotlistAsync

}