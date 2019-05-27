import Styled from 'styled-components'
const Head =Styled.h4 `
    margin: 0;
    padding: .04rem .10rem;
    color: #666;
    font-size: .12rem;
    font-weight: 400;
    background: rgba(0,0,0,.05);

`
const Title=Styled.h2`
    position: relative;
    padding-left: .09rem;
    margin-bottom: .14rem;
    font-size: .17rem;
    font-weight:400;
    height: .20rem;
    line-height: .20rem;
    color:#fff
    ::after{
        content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -0.09rem;
        width: .02rem;
        height: .16rem;
        background-color: #d33a31;
    }
    `
const CommentTalk =Styled.div`
    word-break: break-word!important;
    word-wrap: break-word;
    a{
        color: #507daf;
        text-decoration: none;
    }
    .comment-item{
        padding-top: .10rem;
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: row;
        flex-direction: row;
        .comment-head{
            margin: 0 .10rem;
            flex: none;
            img{
                display: block;
                border-radius: 50%;
                width: .30rem;
                height: .30rem;
            }
            a{
                position: relative;
                display: block;
                .ava-icon{
                    position: absolute;
                    right: -5px;
                    bottom: 0;
                    width: 12px;
                    height: 12px;
                    background-image: url('https://p4.music.126.net/l0FkWHfIqLav4I1oYHIyVQ==/19013854579518977.jpg');
                    background-repeat: no-repeat;
                    background-size: 75px auto;
                }
                .ava-icon.ava-icon-daren{
                    background-position: -0.40rem 0;
                }
    
            }
        }
       
      
        .comment-item-wrap{
            padding-left: 0;
            padding-right: .10rem;
            padding-bottom: .11rem;
            padding-left: .10rem;
            -ms-flex: auto;
            flex: auto;
            width: 0;
            .comment-head{
                display: flex;
                flex-direction: row;
            }
            .comment-meta{
                flex: auto;
                width: 0;
                font-size: 0;
            }
            .comment-user{
                max-width: 100%;
                display: inline-flex;
                align-items: center;
                a{
                    font-size: .14rem;
                    color: #666;
                    line-height: .20rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    flex: auto;
                }
            }
            .comment-time{
                font-size: 9px;
                color: #999;
            }
            .comment-like{
                width: .65rem;
                height: .22rem;
                line-height: .22rem;
                font-size: .11rem;
                color: #999;
                -ms-flex: none;
                flex: none;
                text-align: right;
                .comment-likearea{
                    display: inline-block;
                    min-width: .30rem;
                    padding-left: .05rem;
                }
                .comment-count{
                    vertical-align: middle;
                }
                .comment-likeicn{
                    display: inline-block;
                    width: .14rem;
                    height: .14rem;
                    margin-left: .06rem;
                    line-height: 0;
                    vertical-align: middle;
                    cursor: pointer
                }
            }
        }
        .comment-content{
            position: relative;
            color: #333;
            font-size: .15rem;
            line-height: .22rem;
            margin-top: .05rem;
        }
        .comment-text{
            vertical-align: middle;
        }
        .imgs{
            width:.21rem;
            height:.21rem;
            vertical-align: middle;
        }

    }
.f-bd {
    position: relative;
}
.f-bd::after{
    position: absolute;
    z-index: 2;
    content: "";
    top: 0;
    left: 0;
    pointer-events: none;
    box-sizing: border-box;
    width: 300%;
    height: 300%;
    transform: scale(.333333);
    transform-origin: top left;
    border: 0 solid rgba(0,0,0,.1);
}
.comment-item .comment-head{
    height:.35rem
}
.u-svg{
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}

`

const AllComment =Styled.div`
    margin-left: .50rem;
    .f-bd{
        position: relative;
    }
    .f-bd::after{
        position: absolute;
        z-index: 2;
        content: "";
        top: 0;
        left: 0;
        pointer-events: none;
        box-sizing: border-box;
        width: 300%;
        height: 300%;
        transform: scale(.333333);
        transform-origin: top left;
        border: 0 solid rgba(0,0,0,.1);
    }
    .f-bd-top:after{
        border-top-width: .01rem;
    }
    .box{
        display: block;
        margin-right: .50rem;
        padding: .18rem 0;
        font-size: .14rem;
        color: #999;
        text-align: center;
        line-height: 1;
    }
    i{
        position: relative;
        top: -0.01rem;
        display: inline-block;
        width: .06rem;
        height: .11rem;
        margin-left: .05rem;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAWCAQAAACx896vAAAApUlEQVR4AWNgYDjDeKbnTDkDJjjDembRmf9n/p2JxpRiP7P3zH8g/HnGF1OS/8wlsOTXM+aYkpJnboMlX53RwZRUAQqDJB+fkcGUNDnzASQJNFwUU9LpzE+w5IkzXJiSEWf+gCU3nmHDlMwESoDgkjOMmJItUMl23FKdBAzEdMbmM2x4HY/p5StnRPEGFGbwvj6jizdSMKPy1xk/ohMALNlUYIoDAK7esfYRq6CVAAAAAElFTkSuQmCC') no-repeat;
        background-size: 100%;
        vertical-align: middle;
    }

`
export{
    Head,
    CommentTalk,
    AllComment,
    Title
}