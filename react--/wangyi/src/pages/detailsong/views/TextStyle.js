import Styled from 'styled-components'
import hidden from 'assets/images/hidden.png'
import show from 'assets/images/show.png'
const TextContainter = Styled.div`
    .text-wrap{
        position: relative;
        margin: 0 .10rem 0 .15rem;
        padding-top: .10rem;
        line-height: .19rem;
        color: #666; 
        .text-list{
            margin-bottom: .10rem;
            line-height: .20rem;
            margin-right: -0.10rem;
            .title{
                position: relative;
                display: inline-block;
                margin-right: .10rem;
                padding: .01rem .08rem;
                font-size: .12rem;
            }
            .title::after{
                width: 300%;
                height: 300%;
                transform: scale(.333333);
                border-radius: 9999px;
            }
        }
        .text-word{
            position: relative;
            padding-bottom: .18rem;
            line-height: .19rem;
            color: #666;
            .brack{
                word-wrap: break-word;
                word-break: break-all;
                white-space: normal;
            }
            .hidden{
                background-image:url(${hidden})
            }
            .show{
                background-image:url(${show})
            }
            .info{
                position: absolute;
                bottom: 3px;
                right: 0;
                z-index: 3;
                width: 15px;
                height: 15px;
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: 12px auto
            }
            
        }
    }
`
export{
    TextContainter
}