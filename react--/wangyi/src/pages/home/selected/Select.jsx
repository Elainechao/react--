
import React, { Component } from 'react'
import RecommentdedMusic from './songlists/RecommentdedMusic'
import HotSong from './hotsong/HotSong'
import Search from './search/Search'
import{SelectContainer}from './SelectStyle'
import SelectHander from './SelectHander'
import {Switch,Redirect, withRouter,
    Route} from 'react-router-dom'
// import DetailSong from './songlists/songlist/views/detailsong/DetailSong'
// import DetailSongList from './songlists/songlist/views/detailsong/DetailSongList'
class Select extends Component {
    constructor(props){
        super(props)
        this.handleSwitch = this.handleSwitch.bind(this)
    }
    render() {
        return (
            <SelectContainer>
                <SelectHander onSwitch={this.handleSwitch}></SelectHander>
                <Switch>
                    <Redirect exact from='/home' to='/home/recommentdedmusic' />
                    <Route path='/home/recommentdedmusic' component={RecommentdedMusic}/>
                    <Route path='/home/hotsong' component={HotSong}/>                    
                    <Route path='/home/search' component={Search}/>
                    {/* <Route path='/details' component={DetailSong}/> */}
                    {/* <Route path='/detailsongs' component={DetailSongList}/>   */}
                </Switch>
            </SelectContainer>
        )
    }
    handleSwitch(dir){
        let id= !!this.props.title ? this.props.title : ''
        if(dir==='left'){
            this.props.history.push('/home/recommentdedmusic')
        }else if(dir==='middle'){
            this.props.history.push('/home/hotsong')
        }else if(dir==='right'){
            this.props.history.push('/home/search')
        }
    }
}
export default withRouter(Select)

