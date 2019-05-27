import React, { Component ,Fragment} from 'react'
import {BorderedSongsLists,SongsLists,Head}from './SongPlayStyle'
import {withRouter} from 'react-router-dom'
 class SongPlay extends Component {
    render() {
        let tracks =!!this.props.tracks ? this.props.tracks:[]
        return (
            <Fragment>
                <Head>歌曲列表</Head>
                {
                      tracks.map((value,index)=>(
                    <SongsLists key={value.id}>
                        <div className="list" onClick={()=>{
                        this.props.history.push('/detailsongs/'+value.id) 
                        }} >
                                                <div className='num'>{index+1}</div>
                                                <div  className="wrap">
                                                <div className="songwrap">
                                                    <div className="song">{value.name}</div>
                                                    <div className="songname">
                                                        <i></i>{value.ar[0].name}-{value.name}
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
         </Fragment>
        )
    }
}
export default (withRouter(SongPlay))
