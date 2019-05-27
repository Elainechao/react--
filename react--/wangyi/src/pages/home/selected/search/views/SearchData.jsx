
import React, { Component} from 'react'
import { BigWrap} from './SearchDataStyled'
import {connect} from 'react-redux'
import {getHotsearchAsync} from '../actionCreator'
import {withRouter} from 'react-router-dom'
import http from 'utils/fetch'
const mapState =state =>{
    return({
        hotsearch:state.search.hotsearch.hots
    })
}
const mapDispatch = dispatch=>({
    fetchData(){
        dispatch(getHotsearchAsync())
    }
})
class SearchData extends Component {
    constructor(props){
        super(props)
        this.state={
            item:'',
            result:'',
            list:[],
            style:{display:"none"},
            style1:{display:"block"}
        }
        this.fetchData()
        this.searchHandler=this.searchHandler.bind(this)
        this.handlerClick=this.handlerClick.bind(this)
        this.handlerKeyup=this.handlerKeyup.bind(this)

    }
    render() {
        let hotsearchs = !!this.props.hotsearch ? this.props.hotsearch : []
        let searchvalue =!!this.state.result ? this.state.result :[]
        let lists =!!this.state.list ? this.state.list :[]
        return (
            <BigWrap>
                <div className="m-tabct">
                    <div className="tabctitem">
                        <div className="m-hmsrch">
                        <div className="m-input f-bd f-bd-btm">
                                <div className="inputcover">
                                    <i className="u-svg u-svg-srch"></i>
                                    <input type="search" name="search" className="input" placeholder="搜索歌曲、歌手、专辑" onChange={this.searchHandler} onKeyDown={this.handlerKeyup}/>
                                    {/* <label className="holder" title={this.state.list}>搜索歌曲、歌手、专辑</label> */}
                                    <figure className="close">
                                    <i className="u-svg u-svg-empty"  style={this.state.style} onClick={this.handlerClick}></i>
                                    </figure>
                                </div>
                            </div>
                            <section class="m-recom"  style={this.state.style}>
                                <h3 class="title f-bd f-bd-btm f-thide">搜索{this.state.item}</h3>
                                <ul>
                                    {
                                        searchvalue.map((str,index)=>(
                                    <li class="recomitem" key={index} onClick={()=>{console.log(str)}}>
                                    <i class="u-svg u-svg-search"></i>
                                    <span class="f-bd f-bd-btm f-thide">{str.keyword}</span>
                                    </li>
                                     ))    
                                }
                                </ul>
                            </section>
                            <div className="m-default"  style={this.state.style1}>
                                <section className="m-hotlist">
                                    <h3 className="title">热门搜索</h3>
                                    <ul className="list">
                                        {
                                            hotsearchs.map((value,index)=>(
                                        <li className="item f-bd f-bd-full" key={index} onClick={async()=>{
                                                // let result =await http.get('/search?keywords='+values)
                                                // console.log(result)
                                                // if(result.code === 200){
                                                //     this.state.result=result.result.allMatch
                                                //     this.setState({})
                                                // }
                                            }
                                        }>
                                            <p className="link">{value.first}</p>
                                            <div></div>
                                        </li>
                                        ))    
                                        }
                                        </ul>
                                </section>
                                <section className="m-history" style={this.state.style1}>
                                    <ul className="list">
                                    {
                                        lists.map((value,index)=>(
                                        <li className="item" key={index}>
                                            <i className="u-svg u-svg-histy"></i>
                                            <div className="histyr f-bd f-bd-btm">
                                                <span className="link f-thide">{value}</span>
                                                <figure className="close">
                                                    <i className="u-svg u-svg-close" onClick={()=>{
                                                        this.state.list.splice(index,1)
                                                        this.setState({})}}
                                                    >
                                                    </i>
                                                </figure>
                                            </div>
                                        </li>
                                        ))
                                    }
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </BigWrap>
                )
            }
            fetchData(){
                this.props.fetchData()
            }
           searchHandler(e){
                let value= e.target.value
                this.setState({
                    item:value,
                    result:'',
                    style:{display:"block"},
                    style1:{display:"none"},
                })
                const foo = async () => {
                let result =await http.get('/api/search/suggest?keywords='+this.state.item +'&type=mobile')
                if(result.code === 200){
                    this.state.result=result.result.allMatch
                    this.setState({})
                }};
                foo()
            }
            handlerClick(){
                this.state.list.push(this.state.item)
                this.setState({
                    item:'',
                    style:{display:"none"},
                    style1:{display:"block"},
                })
                // console.log(this.state)

            } 
            handlerKeyup(e){
              e.target.value=''
            }                   
        }
   export default connect(mapState,mapDispatch)(withRouter(SearchData))