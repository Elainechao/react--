import Styled from 'styled-components'
import border from 'components/styled/border'
const SongsLists=Styled.div`
.list{
    display: flex
    color:#333;
    padding-left:.10rem;
    .num{
        display:flex;
        align-items: center;
        width: .28rem;
        font-size: .17rem;
        color: #999;
    }
    .wrap{
        flex: 1 1 auto;
        display: flex;
        position: relative
       .songwrap{
            padding: .06rem 0;
            width:2.95rem;
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
  export{
    BorderedSongsLists,
    SongsLists
  }