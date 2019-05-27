import React, { Component,Fragment } from 'react'
import {Head,CommentTalk,AllComment,Title} from './CommentStyled'

export default class Comment extends Component {
    constructor(props){
        super(props)
        this.state={
           style:{color:"hsla(0,0%,100%,.7)"},
           style1:{color:"#fff"},
           style2:"#999"
        }
        // this.handlerClick=this.handlerClick.bind(this)
    }
    render() {

        let comments =!!this.props.comments ? this.props.comments:[]
        let hotComments =!!this.props.hotComments ? this.props.hotComments:[]
        let total =!!this.props.total ? this.props.total:[]
        return (
            <Fragment>
              <div className='comment-wrap'>
              <CommentTalk className='good-comment'>
                    {this.props.title ? <Title>精彩评论</Title> : <Head>精彩评论</Head> }
                    <div className='comment-list'>
                    {   
                        hotComments.slice(0,10).map((str)=>(
                        <div className='comment-item' key={str.commentId}>
                            <div className='comment-head'>
                                <a className='photo'>
                                    <img src={str.user.avatarUrl} alt=""/>
                                    <span className='ava-icon ava-icon-daren'></span>
                                </a>
                            </div>
                            <div className='comment-item-wrap f-bd f-bd-btm'>
                                <div className='comment-head'>
                                    <div className='comment-meta'>
                                        <span className='comment-user'>
                                         {this.props.title ? <a className='nickname' style={this.state.style}>{str.user.nickname}</a> : <a className='nickname'>{str.user.nickname}</a> }
                                        </span>
                                        <div className='comment-time'>
                                            <span>{str.time}</span>
                                        </div>
                                    </div>
                                    <div className='comment-like'>
                                        <span className='comment-likearea' onClick={()=>{str.likedCount++
                                            this.setState({
                                                style2:"red"
                                            })
                                            }}>
                                            <span className='comment-count'>{str.likedCount}</span>
                                            <i className='comment-likeicn'>
                                                <svg className="u-svg u-svg-unzancmt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" >><path fill="#999" d="m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836"></path></svg>
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className='comment-content'>
                                {this.props.title ? <span className='comment-text' style={this.state.style1}>
                                    {str.content}
                                    </span> :<span className='comment-text'>
                                    {str.content}
                                    </span> }
                                    <img className='imgs' src="" alt=""/>
                                    <span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    </div>
                </CommentTalk>
                <CommentTalk className='good-comment'>
                {this.props.title ? <Title>最新评论{total}</Title> : <Head>最新评论{total}</Head> }
                    <div className='comment-list'>
                    {
                        comments.slice(0,11).map(value=>(
                        <div className='comment-item' key={value.commentId}>
                            <div className='comment-head'>
                                <a className='photo'>
                                    <img src={value.user.avatarUrl} alt=""/>
                                    <span className='ava-icon ava-icon-daren'></span>
                                </a>
                            </div>
                            <div className='comment-item-wrap f-bd f-bd-btm'>
                                <div className='comment-head'>
                                    <div className='comment-meta'>
                                        <span className='comment-user'>
                                        {this.props.title ? <a className='nickname' style={this.state.style}>{value.user.nickname}</a> : <a className='nickname'>{value.user.nickname}</a> }
                                        </span>
                                        <div className='comment-time'>
                                            <span>{value.time}</span>
                                        </div>
                                    </div>
                                    <div className='comment-like'>
                                        <span className='comment-likearea' onClick={()=>{value.likedCount++
                                            this.setState({
                                                style2:"red"
                                            })
                                            }}>
                                            <span className='comment-count'>{value.likedCount}</span>
                                            <i className='comment-likeicn'>
                                                <svg className="u-svg u-svg-unzancmt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path fill="#999" d="m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836"></path></svg>
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className='comment-content'>
                                    {this.props.title ? <span className='comment-text' style={this.state.style1}>
                                    {value.content}
                                    </span> :<span className='comment-text'>
                                    {value.content}
                                    </span> }
                                    <img className='imgs' src="" alt=""/>
                                    <span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))  
                }
                   </div>
                </CommentTalk>
                
                <AllComment className='all-comment f-bd .f-bd-top'>
                    <span className='box'>
                        查看全部{total}条评论
                        <i></i>
                    </span>
                </AllComment>
              </div>
            </Fragment>
        )
    }
    // handlerClick(index){
    //     // console.log(this.props.comments[index].likedCount)
    //     // console.log(index)
    // }
}
