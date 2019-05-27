import React, { Component } from 'react'
import {TextContainter}from './TextStyle'
export default class Text extends Component {
    render() {
        let tags =!!this.props.tags ? this.props.tags:[]
        let description =!!this.props.description ? this.props.description:[]
        return (
            <TextContainter>
                <section className='text-wrap'>
                    <div className='text-list'>
                    标签：
                    {
                      tags.map((value,index)=>( 
                        <em className='title' key={index}>{value}</em>
                        )) 
                    }    
                    </div>
                    <div className='text-word'>
                        <div className='brack'>
                            <span className='word-list'>
                                <i>简介：{description} </i>
                                <br/>
                            </span>
                        </div>
                        <span className='hidden show info'></span>
                    </div>
                </section>
            </TextContainter> 
        )
    }
}
