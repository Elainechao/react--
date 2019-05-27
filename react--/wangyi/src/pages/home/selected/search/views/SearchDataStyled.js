import Styled from 'styled-components'
import search from 'assets/images/sousuo.png'
import error from 'assets/images/error.png'
import time from 'assets/images/time.png'
const BigWrap =Styled.div`
    width: 100%;
    height: 100%;
    display:block;
    .tabctitem{
        width:100%;
        height:100%
        .m-hmsrch{
            background: #fbfcfd;
            padding:.15rem .1rem;
        }
        .m-recom{
            margin:0 auto;
            display:none;
            .title{
                height: .5rem;
                margin-left: .10rem;
                padding-right: .10rem;
                font-size: .15rem;
                line-height: .50rem;
                color: #507daf;
            }
            .f-bd {
                position: relative;
            }
            .f-thide {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: normal;
            }
            .recomitem{
                display: flex;
                align-items: center;
                height: .45rem;
                padding-left: .10rem;
            }
            i{
                flex: 0 0 auto;
                margin-right: .07rem;
            }
            .u-svg-search{
                width: .3rem;
                height: .3rem;
                background-image: url(${search});
                background-size:100%
            }
            span{
                display: inline-block;
                flex: 1;
                width: 1%;
                padding-right: .10rem;
                font-size: .15rem;
                line-height: .45rem;
                color: #333;
            }
            
        }
        .m-input{
            position:relative;
            .inputcover{
                position: relative;
                width: 100%;
                height: .30rem;
                padding: 0 .30rem;
                box-sizing: border-box;
                background: #ebecec;
                border-radius: .30rem;
                .u-svg{
                    display: inline-block;
                    vertical-align: middle;
                    background-position: 0 0;
                    background-size: contain;
                    background-repeat: no-repeat;
                }
                .u-svg-srch{
                    position: absolute;
                    left: 0;
                    top: .09rem;
                    margin: 0 .08rem;
                    vertical-align: middle
                    width: .13rem;
                    height: .13rem;
                    background-image: url(${search});
                    }
                .input{
                    width: 100%;
                    height: .30rem;
                    line-height: .18rem;
                    background: transparent;
                    font-size: .14rem;
                    color: #333;
                    outline: none;
                    border:0
                }    
                .holder{
                    position: absolute;
                    left: .30rem;
                    top: .05rem;
                    font-size: .14rem;
                    color: #c9c9c9;
                    background: transparent;
                    pointer-events: none;
                
                }
                .close{
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: .30rem;
                    height: .30rem;
                    line-height: .28rem;
                    text-align: center; 
                    .u-svg-empty{
                        display:none;
                        width: 14px;
                        height: 14px;
                        background-color:rgba(0,0,0,0.2);
                        position:absolute;
                        top:.08rem;
                        border-radius:50%;
                        vertical-align: middle;
                        background-image:url(${error});
                        background-size:.20rem  .20rem;
                        background-position:-0.025rem,0,0;                        
                    }
                }
                }
            }
        }
        .m-default{
            display:block;
            .m-hotlist{
                padding:.15rem .1rem 0;
                .title{
                    font-size:.12rem;
                    line-height:.12rem;
                    color:#666
                }
                .list{
                   margin:.1rem 0 .07rem 
                   .item{
                       display:inline-block;
                       height:.32rem;
                       margin-right:.08rem;
                       margin-bottom:.08rem;
                       padding:0 .14rem;
                       font-size:.14rem;
                       line-height:.32rem;
                       color:#333;
                       position:relative;
                       .f-bd{
                            position:relative;
                       }
                        >div{
                           width:100%;
                           height:100%
                           border:.01rem solid rgba(0,0,0,.1);
                           position:absolute;
                           top:0;
                           left:0
                           border-radius:.60rem
                       }
                   }
                }
            }
        }
        .m-history{
            display:block
            .item{
                display: flex;
                align-items: center;
                height: .45rem;
                .histry{
                    flex: 1;
                    width: 1%;
                    position: relative;
                }
                .link{
                    width:2.98rem;
                    margin-right:.1rem
                }
                .close{
                    flex: 0 0 auto;
                    width: .32rem;
                    height: .32rem;
                    line-height: .32rem
                } 
            }
            .histyr {
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                height: .45rem;
            }
            .f-thide {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: normal;
            }
            .u-svg-histy{
                margin: 0 .10rem;    
            }
            .u-svg-histy {
                width: .15rem;
                height: .15rem;
                background-image: url(${time});
                background-size:100%

            }  
            .u-svg-close {
                margin-left: .02rem;
            }
            .u-svg {
                display: inline-block;
                vertical-align: middle;
                background-position: 0 0;
                background-size: contain;
                background-repeat: no-repeat;
            }
            .u-svg-close {
                flex: 0 0 auto;
                width: .32rem;
                height: .32rem;
                line-height: .32rem;
                background-image: url(${error});
                background-position:-0.1rem,0,0;                        

            }       
        }
    }
`
export{
    BigWrap,
}