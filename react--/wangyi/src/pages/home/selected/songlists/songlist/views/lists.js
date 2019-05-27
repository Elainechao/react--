import Styled from 'styled-components'
import Ear from 'assets/images/ear.png'
import border from 'components/styled/border'
const Title =Styled.h2`
    position: relative;
    padding-left: .09rem;
    margin-bottom: .14rem;
    font-size: .17rem;
    font-weight:400;
    height: .20rem;
    line-height: .20rem;
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
const SongListWrap =Styled.div`
    position: relative;
    padding-bottom: .24rem;
    display: flex;
    flex-wrap: wrap;
    .list{
        position: relative;
        padding-bottom: .16rem;
        display: block;
        float: left;
        width: 33.3%;
        padding-left: .01rem;
        padding-right: .01rem;
        box-sizing: border-box;
        z-index:22;
        div{
            position: relative;
            padding-bottom: 100%;
        }
        img{
            position: absolute;
            width: 100%;
            left: 0;
            top: 0;
            z-index: 1;
        }
        span{
            position: absolute;
            right: .05rem;
            top: .02rem;
            z-index: 3;
            padding-left: .13rem;
            color: #fff;
            font-size: .12rem;
            background-position: 0;
            background-image: url(${Ear});
            background-repeat: no-repeat;
            background-size: .11rem .10rem;
            text-shadow: 1px 0 0 rgba(0,0,0,.15);
        }
        span:after{
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 20px;
            z-index: 2;
            background-image: linear-gradient(180deg,rgba(0,0,0,.2),transparent);
        }
    }
    p{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        padding: .06rem .02rem 0 .06rem;
        line-height: 1.2;
        font-size: .13rem; 
        color:#333
    }

`
const MusicList=Styled.div `
    position: relative;
    min-height: 20px;
`
const SongsLists=Styled.div`
.item{
    display: flex
    color:#333;
    padding-left:.10rem;
    z-index:22;
    .wrap{
        flex: 1 1 auto;
        display: flex;
        position: relative
       .songwrap{
            padding: .06rem 0;
            width:3.23rem;
            .song{
                font-size:.17rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: normal;
            }
            .songname{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: normal;
                font-size: .12rem;
                color: #888;
                i{
                    display: inline-block;
                    width: .12rem;
                    height: .08rem;
                    margin-right: .04rem;
                    background: url(https://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880) no-repeat;
                    background-size: 1.66rem .97rem;
                }
            }
        }
        .play {
            display: flex;
            align-items: center;
            padding: 0 10px;
            span{
                display: inline-block;
                width: .22rem;
                height: .22rem;
                background: url(https://s3.music.126.net/m/s/img/index_icon_3x.png?49a82fee3e0fc602e9c8b25df2bda159) no-repeat;
                background-size: 1.66rem .97rem;
                background-position: -0.24rem 0;
            }
        }
        
    }
    &::after{
            position: absolute;
            z-index: 2;
            content: "";
            top: 0;
            left: 0;
            pointer-events: none;
            box-sizing: border-box;
            transform-origin: top left;
            border: 0 solid rgba(0,0,0,.1);
            width: 300%;
            height: 300%;
            transform: scale(.333333);
        }
}
`
const BorderedSongsLists = border({
    component: SongsLists,
    color: 'rgba(0,0,0,.1)'
  })
export {Title,SongListWrap,MusicList,SongsLists,BorderedSongsLists}