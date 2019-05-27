import http from 'utils/fetch'
import {
    GET_HOTSEARCH
} from './actionTypes'

const getHotsearchSync=hotsearch =>({
    type:GET_HOTSEARCH,
    hotsearch
})
const getHotsearchAsync =()=>{
    return async dispatch =>{
        let result =await http.get('/api/search/hot')
        // console.log(result)
        dispatch(getHotsearchSync(result.result))
    }
}
export{
    getHotsearchSync,
    getHotsearchAsync

}