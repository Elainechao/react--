import React, { Component } from 'react'
import{HomeContainer } from './HomeStyled'
import FirstPage from './firstpage/FirstPage'
import DetailSong from '../detailsong/DetailSong'
import DetailSongList from '../detailsong/DetailSongList'
import Login from '../login/views/Login'
import {Switch,Redirect, withRouter,
    Route} from 'react-router-dom'
 class Home extends Component {
    render() {
        return (
            <>
                <HomeContainer id="homecontainer"> 
                <Switch>
                    <Redirect exact from='/' to='/home' />
                    <Route path='/home' component={FirstPage}/>
                    <Route path='/details/:id' component={DetailSong}/>
                    <Route path='/detailsongs/:id' component={DetailSongList}/> 
                    <Route path='/login' component={Login}/>  
                </Switch>
                </HomeContainer>
              
            </>
        )
    }
}
export default withRouter(Home)