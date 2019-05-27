import React, { Component } from 'react'
import {connect} from 'react-redux'
import {DetailsContainer} from './DetailsStyled'
import HeaderSong from './views/HeaderSong'
import Text from './views/Text'
import {getDetailAsync} from './actioncreator'
import SongPlay from 'components/musiclist/SongPlay'
import Comment from 'components/comment/Comment'
import BSrcoll from 'better-scroll'
const mapState=state=>{
    return({
        subdetail:state.detail.subdetail.playlist,
        comment:state.detail.comment
    })
}
const mapDispatch =dispatch =>({
    fetchData(){
        let id=this.location.pathname.split('/')[2]
        dispatch(getDetailAsync(id))
    }
})

class DetailSong extends Component {
    constructor(props){
        super(props)
        this.fetchData()
    }
    render() {
       let detail= !!this.props.subdetail ? this.props.subdetail : [] 
       let comment = !!this.props.comment ? this.props.comment:[]
    //    console.log(this.comment)
        return (
            <DetailsContainer>
                <HeaderSong {...detail}></HeaderSong>
                <Text {...detail}></Text>
                <SongPlay {...detail}></SongPlay>
                <Comment {...comment}></Comment>
            </DetailsContainer>
        )
    }
    componentDidMount(){
        new BSrcoll('#homecontainer',{click:true})
    }
    fetchData(){
        this.props.fetchData()
    }
   
}
export default connect(mapState,mapDispatch)(DetailSong)
