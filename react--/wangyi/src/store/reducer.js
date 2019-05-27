import {combineReducers} from 'redux'
import{reducer as list} from 'pages/home/selected/songlists/songlist'
import{reducer as item} from 'pages/home/selected/songlists/songlist'
import{reducer as music} from 'pages/home/selected/hotsong/hotlist'
import{reducer as search} from 'pages/home/selected/search'
import{reducer as detail} from 'pages/detailsong'
import{reducer as login} from 'pages/login/views'
export default combineReducers({
    list,
    item,
    music,
    search,
    detail,
    login
})