import React, { Component } from 'react'
import { SongContainer ,SongWrap} from './SongListStyled';
import SongList from './songlist/views/SongList'
// import Swiper from '../songlists/songlist/swiper/Swiper'
export default class componentName extends Component {
    render() {
        return (
            <SongContainer id='songcontainter'>
                {/* <Swiper></Swiper> */}
                <SongWrap>
                    <SongList></SongList>
                </SongWrap>
            </SongContainer>
        )
    }
}
