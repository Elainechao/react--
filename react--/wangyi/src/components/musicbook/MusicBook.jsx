import React, {Fragment,Component } from 'react'
import { Title, SongListWrap, MusicList,SongsLists,BorderedSongsLists} from './MusicBookStyled'
import{withRouter} from 'react-router-dom'
class MusicBook extends Component {
    render() {
        let simiplays =!!this.props.playlists? this.props.playlists: []
        let simisongs =!!this.props.songs? this.props.songs: []
        return (
                    <Fragment>
                           <Title>
                                包含这首歌的歌单
                           </Title>
                           <SongListWrap>
                              { 
                                  simiplays.map(value=>(
                                <div className="list" onClick={()=>{
                                    this.props.history.push('/details/'+value.id) 
                                    
                                    }} key={value.id}>
                                    <div>
                                        <img src={value.coverImgUrl} alt="" />
                                        <span className="ear">{(value.playCount/10000).toFixed(1)}万</span>
                                    </div>
                                    <h3 className="tit f-fs13 f-thide">{value.name}</h3>
                                    <p className="sub"><span className="author">{value.creator.nickname}<span className="icn u-tag u-tag-vip"></span></span></p>
                                </div>
                                ))   
                            }
                            </SongListWrap>
                            <Title>
                                喜欢这首歌的人也听
                            </Title>
                            <MusicList>
                                { 
                                    simisongs.map(str=>(
                                    <SongsLists key={str.id} onClick={()=>{
                                        this.props.history.push('/detailsongs/'+  str.id)
                                        this.forceUpdate();
                                        }}>
                                        <div className="item">
                                        <figure className="cover">
                                            <img className="imgs" src={str.album.blurPicUrl}/>
                                        </figure>
                                        <div  className="wrap">
                                        <div className="songwrap">
                                            <div className="song">{str.name} </div>
                                            <div className="songname">
                                                <i></i>{str.album.artists[0].name}-{str.name}
                                            </div>
                                        </div>
                                        <div className="play">
                                            <span></span>
                                        </div>
                                        </div>
                                        </div>  
                                        <BorderedSongsLists></BorderedSongsLists> 
                                   </SongsLists>
                               ))    
                            }
                            </MusicList>
                        </Fragment>
        )
    }
    // componentDidMount(){
    //     new BSrcoll('.sc-kGXeez',{click:true})
    // }
    // fetchData(){
    //     this.props.fetchData()
    // }
    // fetchDatas(){
    //     this.props.fetchDatas()
    // }
 
} 
export default withRouter(MusicBook)