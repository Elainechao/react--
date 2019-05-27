import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getHotlistAsync} from '../actioncreator'
import {BorderedSongsLists,SongsLists}from './HotListStyled'
import BSroll from 'better-scroll'
const mapState =state=>{
    return({
        hotlist:state.music.hotlist.tracks
    })
}
const mapDispatch =dispatch =>({
    fetchData(){
        dispatch(getHotlistAsync())
    }
})
 class HotLists extends Component {
     constructor(props){
        super(props)
        this.fetchData()
     }

    render() {
        let lists =!!this.props.hotlist? this.props.hotlist : []
          return (
            <Fragment>
               {
                   lists.slice(0,20).map((value,index)=>(
                    <SongsLists  key={value.id} onClick={()=>{
                        this.props.history.push('/detailsongs/' + value.id )}}
                   >
                            <div className="list">
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
    componentDidMount(){
        new BSroll('#hotsongcontainer',{click:true})
    }
    fetchData(){
        this.props.fetchData()
    }
}
export default connect(mapState,mapDispatch)(withRouter(HotLists))

                        
                        