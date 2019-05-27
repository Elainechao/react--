import Styled from 'styled-components'
import play from 'assets/images/play.png'
const DetailsContainer = Styled.div`
    >div{
        background-color: #f8f8f8;
    }
`
const DetailsMusicContainer = Styled.div`
    height:100%;
        .newsong{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        min-width: .320rem;
        overflow: hidden;
        }
     
        .m-scroll_wrapper {
            overflow: hidden;
        }
        .m-song_nor {
            bottom: .94rem;
        }
        .m-song_nor {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: .60rem;
            overflow: hidden;
            z-index: 21;
        }
        .m-scroll_scroller_vertical {
            position: absolute;
            left: 0;
            top: 0;
            min-height: 100%;
            width: 100%;
        }
        .m-scroll_scroller {
            backface-visibility: hidden;
            z-index: 1;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            user-select: none;
            text-size-adjust: none;
        }
        .m-song_newfst {
            height: 7.18rem;
            position: relative;
            padding-bottom: .12rem;
            box-sizing: border-box;
        }
        .m-song-wrap {
            padding-top: .70rem;
        }
        .m-song-info {
            padding: 0 .35rem;
            margin-top: .25rem;
        }
        .m-song-info {
            margin-top: .25rem;
        }
        .m-link {
            color: hsla(0,0%,100%,.6);
            height: .30rem;
            line-height: .30rem;
            bottom:.18rem
        }
       
        .m-giude, .m-link {
            position: absolute;
            left: 0;
            right: 0;
            box-sizing: border-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-align: center;
            align-items: center;
        }
        .m-giude {
            height: .36rem;
            padding-top: .10rem;
            bottom:-0.14rem
        }
        .m-logo {
            position: absolute;
            top: .12rem;
            left: .10rem;
            display: block;
            height: .17rem;
            line-height: 0;
        }
        .u-svg-logosong {
            width: .92rem;
            height: .17rem;
        }
        .u-svg {
            display: inline-block;
            vertical-align: middle;
            background-position: 0 0;
            background-size: contain;
            background-repeat: no-repeat;
        }
        .m-song-disc {
            position: relative;
            width: 2.48rem;
            height: 2.48rem;
            margin: 0 auto;
        }
        .m-song-disc {
            width: 2.96rem;
            height: 2.96rem;
        }
    
        .m-song-turn {
            width: 100%;
            height: 100%;
        }
        .m-song-turn:before {
            content: " ";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 2;
            background: url('https://s3.music.126.net/m/s/img/disc-ip6.png?69796123ad7cfe95781ea38aac8f2d48') no-repeat;
            background-size: contain;
        }
        .m-song-turn:before {
            background-image: url('https://s3.music.126.net/m/s/img/disc-ip6.png?69796123ad7cfe95781ea38aac8f2d48');
        }
        .m-song-rollwrap {
            position: absolute;
            width: 1.50rem;
            height: 1.50rem;
            
        }
        .m-song-rollwrap {
            left: 50%;
            top: 50%;
            z-index: 1;
            width: 1.84rem;
            height: 1.84rem;
            margin: -0.92rem 0 0 -0.92rem;
        }
        .m-song-img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            background: url('https://s3.music.126.net/m/s/img/disc_default.png?7c9b3adc16f5485c2bfbe8a540534188') no-repeat;
            background-size: contain;
        }
        .u-img {
            width: 100%;
            vertical-align: middle;
        }
        .m-song-lgour, .m-song-light {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 3;
        }
        .m-song-light {
            background: url('https://s3.music.126.net/m/s/img/disc_light-ip6.png?996fc8a2bc62e1ab3f51f135fc459577') no-repeat;
            background-position:0 0;
            background-size: contain;
        }
        .m-song-plybtn {
            position: absolute;
            width: 50px;
            height: 50px;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            z-index: 5555;
            background: url(${play}) 0 0 no-repeat;
            background-size: contain;
        }
        .m-song-plybtn {
            width: .56rem;
            height: .56rem;
        }
        .m-song-plybtn:after {
            content: "";
            display: block;
            position: absolute;
        }
        .m-song-disc:after {
            content: " ";
            position: absolute;
            top: -0.63rem;
            left: 1.07rem;
            z-index: 5;
            width: .84rem;
            height: 1.22rem;
            background: url('https://s3.music.126.net/m/s/img/needle.png?702cf6d95f29e2e594f53a3caab50e12') no-repeat;
            background-size: contain;
        }
        .m-song-disc:after {
            width: .96rem;
            height: 1.37rem;
            top: -0.70rem;
            left: 1.33rem;
            background-image: url('https://s3.music.126.net/m/s/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862');
        }
        .m-song-h2 {
            text-align: center;
            font-size: .15rem;
            line-height: 1.1;
            color: #fefefe;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .m-song-h2 {
            font-size: .18rem;
        }
        .m-song-lrc {
            position: relative;
            margin-top: .14rem;
        }
        .m-song-gap {
            margin: 0 .04rem;
        }
        .m-song-autr {
            font-size: .13rem;
            color: hsla(0,0%,100%,.6);
        }
        .m-song-autr, .m-song-pure {
            font-size: .16rem;
        }
        #playlyric {
            transition: transform .3s ease-out;
        }
        .m-song-scroll{
            line-height: 1.5;
            font-size: .13rem;
            height: .72rem;
            overflow: hidden;
            height: .88rem;
        }
        .m-song-scroll {
            font-size: .16rem;
        }
        .m-song-lritem {
            padding-bottom: .05rem;
            text-align: center;
        }
        .m-song-lritem {
            color: rgb(255, 255, 255);
            padding-bottom: .08rem;
        }
        .m-giude .arr {
            display: block;
            width: .17rem;
            height: .12rem;
            background-repeat: no-repeat;
            background-size: .17rem auto;
            background-image: url("data:image/png;base64,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");
        }
        .m-giude .arr.ani {
            animation: shining 1.2s steps(1) infinite;
        }
        .m-giude .arr{
            transfrom:rotate(180deg)
        }
        .m-giude{
            color:hsla(0,0%,100%,.8);
            margin-top:0.04rem
        }
        @keyframes shining{
            0%{background-position-y:0}
            15%{background-position-y:-12px}
            30%{background-position-y:-24px}
            45%{background-position-y:-36px}
            60%{background-position-y:-48px}
            75%{background-position-y:-60px}
            90%{background-position-y:-72px}
            to{background-position-y:-84px}
        }
       
        .m-song-clickarea{   
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            bottom: .52rem;
            z-index: 10;
        }
        .comment-list{
            margin-top:.40rem
        }
        .playsrc{
            width:100%;
            height:.8rem;
            position:fixed;
            bottom:0;
            overflow:hidden
            text-align:center;
            line-height:.80rem;
            color:hsla(0,0%,100%,.8);
            font-weight:700;
            font-size:.20rem;
            img{
                width:.40rem;
                height:.20rem
            }
        }
      
        .media{
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
            margin: auto;
            object-fit:fill
        }
        #a-circling{
            animation: circling 20s infinite linear;
        }
      
        #a-circling{
            transform:rotate(0deg);
        }
        @-webkit-keyframes circling {
            from {
              -webkit-transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
            }
          }
        @keyframes circling{
            from {
                -webkit-transform: rotate(0deg);
              }
              to {
                -webkit-transform: rotate(360deg);
              }
        }
       
`
const WrapImg =Styled.div`
    background-image: url(${props=>props.title});
    opacity: 1;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    transform: scale(1.5);
    transform-origin: center top;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
    z-index:0;
    transition: opacity .3s linear;
    &:after {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: rgba(0,0,0,.5);
    }

`

export{
    DetailsContainer ,
    DetailsMusicContainer,
    WrapImg,
}
