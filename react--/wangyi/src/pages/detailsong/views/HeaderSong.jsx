import React, { Component } from 'react'
import {HeaderContainer} from './HeaderSongStyled'
export default class HeaderSong extends Component {
    render() {
        let img =!!this.props.coverImgUrl ? this.props.coverImgUrl:[]
        let count =!!this.props.playCount ? this.props.playCount:[]
        let name =!!this.props.name ? this.props.name:[]
        let creatorImg =!!this.props.creator ? this.props.creator:[]
        return (
            <HeaderContainer title={img}>
            <section>
                <div className="wrap"></div>
                <div>
                    <div className='wraps'>
                        <img src={img} alt=""/>
                        <span>歌单</span>
                        <i>{(count/10000).toFixed(1)}万</i>
                    </div>
                    <div>
                        <h2>{name}</h2>
                        <div>
                            <a href="#">
                                <div>
                                    <img src={creatorImg.avatarUrl} alt=""/>
                                    <span></span>
                                </div>
                                {creatorImg.nickname}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            </HeaderContainer>
        )
    }
}
