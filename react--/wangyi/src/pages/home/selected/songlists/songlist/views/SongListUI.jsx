import React, {Fragment,Component } from 'react'
import { Title, SongListWrap, MusicList,SongsLists,BorderedSongsLists } from './lists'

export default class SongListUI extends Component {
    constructor(props){
        super(props)
        this.handlerClick=this.handlerClick.bind(this)
    }
    render() {
        return (
                    <Fragment>
                           <Title>
                                推荐歌单
                           </Title>
                             <SongListWrap>
                              { 
                                  this.props.list.map(value=>(
                                // <Route path='/detail' component={DetailSong}>
                                <a key={value.id} onClick={this.handlerClick}>
                                    <div>
                                        <img src={value.picUrl} alt="" />
                                        <span>{value.playCount}</span>
                                    </div>
                                    <p>{value.name}</p>
                                </a>
                                // </Route>
                                
                                ))   
                            }
                            </SongListWrap>
                            <Title>
                                最新音乐
                            </Title>
                            <MusicList>
                                { 
                                    this.props.item.map(str=>(
                                    <SongsLists><a  href="#"   key={str.id}>
                                        <div  className="wrap">
                                        <div className="songwrap">
                                            <div className="song">{str.name}</div>
                                            <div className="songname">
                                                <i></i>{str.artists.name}- {str.album.name}
                                            </div>
                                        </div>
                                        <div className="play">
                                            <span></span>
                                        </div>
                                        </div>
                                        </a>  
                                        <BorderedSongsLists></BorderedSongsLists> 
                                   </SongsLists>
                                ))    
                            }
                            </MusicList>
                        </Fragment>
        )
    }
    handlerClick(){
        console.log(1)
        this.props.history.push('/detail')
    }
}
