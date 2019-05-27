import Styled from 'styled-components'
import ear from 'assets/images/ear.png'
const HeaderContainer = Styled.div`
    section{
        position: relative;
        padding: .30rem .10rem .30rem .15rem;
        overflow: hidden;
        .wrap{
            background-image: url(${props =>props.title}) ;
            background-repeat: no-repeat;
            filter: blur(20px);
            background-size: cover;
            background-position: 50%;
            transform: scale(1.5);
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
        }
        .wrap::after{
            content: " ";
            background-color: rgba(0,0,0,.25);
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            }
        div:nth-of-type(2){
            display: flex;
            position: relative;
            z-index: 2;
            .wraps:nth-of-type(1){
                width:1.26rem;
                height:1.26rem;
                position:relative;
                background:#e2e2e3;
             
                img{
                    width: 100%;
                    vertical-align: middle;
                }
                span{
                    position: absolute;
                    z-index: 3;
                    top: .10rem;
                    left: 0;
                    padding: 0 .08rem;
                    height: .17rem;
                    color: #fff;
                    font-size: .09rem;
                    text-align: center;
                    line-height: .17rem;
                    background-color: rgba(217,48,48,.8);
                    border-top-right-radius: .17rem;
                    border-bottom-right-radius: .17rem;
                }
                i{
                    position: absolute;
                    right: .02rem;
                    top: 0;
                    z-index: 3;
                    padding-left: .15rem;
                    color: #fff;
                    font-size: .12rem;
                    background-image:url(${ear});
                    background-position: 0;
                    background-repeat: no-repeat;
                    background-size: .11rem .10rem;
                    text-shadow: .01rem 0 0 rgba(0,0,0,.15);
                }
                }
            .wraps::after{
                content: " ";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: .18rem;
                z-index: 2;
                background-image: linear-gradient(90deg,transparent,rgba(0,0,0,.2));
            }
                div:nth-of-type(2){
                    flex: 1 1 auto;
                    display:flex;
                    flex-direction:column;
                    width: 1%;
                    margin-left: .16rem;
                    h2{
                        padding-top: .01rem;
                        font-size: .17rem;
                        line-height: 1.3;
                        color: #fefefe;
                        height: .44rem;
                        display: -webkit-box;
                        -webkit-box-pack: center; 
                        overflow: hidden;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        word-wrap: break-word;
                        word-break: break-all;
                    }
                    >div{
                        display: block;
                        position: relative;
                        margin-top: .20rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        word-break: normal;
                        a{
                            display: inline-block;
                            color: hsla(0,0%,100%,.7);
                            div{
                                position:relative;
                                display: inline-block;
                                width: .30rem;
                                height: .30rem;
                                border-radius: 50%;
                                vertical-align: middle;
                                margin-right: .05rem;
                                img{
                                    border-radius: 50%;
                                    width: 100%;
                                    vertical-align: middle;
                                }
                                span{
                                    position: absolute;
                                    right: -0.05rem;
                                    bottom: 0;
                                    width: .12rem;
                                    height: .12rem;
                                    background-position: -0.40rem 0;
                                    background-image: url('https://s3.music.126.net/m/s/img/usericn_3x.png?71c26f814f7ee3c5594694c1b6234ea8');
                                    background-size: .70rem auto;
                                    background-repeat: no-repeat;
    
                                }
                            }
                        }
    
                    }
               
            }
          
            }

        }

        
        
        }
    }

`
export{HeaderContainer}

