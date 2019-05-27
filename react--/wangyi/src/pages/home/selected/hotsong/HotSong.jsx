import React, { Component } from 'react'
import {HotSongContainer,SongWrap} from './HotSongStyled'
import Hot from './hot/views/Hot'
import HotLists from './hotlist/views/HotList'
export default class HotSong extends Component {
    render() {
        return (
            <HotSongContainer id="hotsongcontainer">
                <SongWrap>
                <Hot></Hot>
                <HotLists></HotLists>
                </SongWrap>
            </HotSongContainer>
        )
    }
}
