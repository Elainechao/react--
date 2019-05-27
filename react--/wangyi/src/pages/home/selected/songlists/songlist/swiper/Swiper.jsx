import React, { Component } from 'react'
import http from 'utils/fetch'
import SwiperUi from './SwiperUi'
export default class Swiper extends Component {
    constructor(props){
        super(props)
        this.state={
            result:''
        }
    }
    async componentWillMount(){
        let result =await http.get('/api/banner')
        if(result.code === 200){
            this.state.result=result.banners
            this.setState({})
        }
        console.log(result.banners)
    }
    render() {
        return(
            <SwiperUi {...this.state.result}/>
        )
    }
}


