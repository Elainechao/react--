import http from 'utils/fetch'
import { 
    GET_LIST,
    GET_ITEM
  } from './actionTypes'

export const getListSync=list =>({
      type:GET_LIST,
      list
  })
  export const getItemSync=item =>({
    type:GET_ITEM,
    item
})
export const getListAsync=()=>{
    return  async dispatch =>{
        let result =await http.get('/api/personalized')
        dispatch(getListSync(result.result))
    }
}
export const getItemASync=()=>{
    return  async dispatch =>{
        let result1 =await http.get('/api/personalized/newsong')
        dispatch(getItemSync(result1.result))
    }
}
