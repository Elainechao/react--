import React, {Fragment,Component } from 'react'
import {connect} from 'react-redux'
import { Title, SongListWrap, MusicList,SongsLists,BorderedSongsLists } from './lists'
import {getListAsync,getItemASync} from '../actionCreator'
import BSrcoll from 'better-scroll'
import {withRouter} from 'react-router-dom'
const mapState = state => {
    return ({
        list:state.list.list,
        item:state.item.item
    })
  }
const mapDispatch =dispatch =>({
    fetchData(){
        dispatch(getListAsync())
    },
    fetchDatas(){
        dispatch(getItemASync())
    }
  
})

class SongList extends Component {
    constructor(props){
        super(props)
        this.fetchData()
        this.fetchDatas()
    }
    render() {
        let lists =!!this.props.list ? this.props.list : []
        let items =!!this.props.item ? this.props.item :[]
        return (
                    <Fragment>
                           <Title>
                                推荐歌单
                           </Title>
                             <SongListWrap>
                              { 
                                  lists.slice(0,6).map(value=>(
                                <div className="list" onClick={()=>{
                                    // this.props.history.push(({path:'/details/' + value.id,params:value.id})) 
                                    // console.log(this.props,value.id)
                                    this.props.history.push('/details/' + value.id) 
                                    
                                    }} key={value.id}>
                                    <div>
                                        <img src={value.picUrl} alt="" />
                                        <span>{(value.playCount/10000).toFixed(1)}万</span>
                                    </div>
                                    <p>{value.name}</p>
                                </div>
                                ))   
                            }
                            </SongListWrap>
                            <Title>
                                最新音乐
                            </Title>
                            <MusicList>
                                { 
                                    items.map(str=>(
                                    <SongsLists onClick={()=>{
                                    this.props.history.push('/detailsongs/' + str.id )}}  key={str.id} >
                                        <div className="item">
                                        <div  className="wrap">
                                        <div className="songwrap">
                                            <div className="song">{str.name}</div>
                                            <div className="songname">
                                                <i></i>{str.song.artists[0].name}- {str.song.album.name}
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
    componentDidMount(){
        new BSrcoll('#songcontainter',{click:true})
    }
    fetchData(){
        this.props.fetchData()
    }
    fetchDatas(){
        this.props.fetchDatas()
    }
 
} 
export default connect(mapState,mapDispatch)(withRouter(SongList))