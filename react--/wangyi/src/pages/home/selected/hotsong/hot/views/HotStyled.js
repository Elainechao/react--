import Styled from 'styled-components'

const HotNav =Styled.div`
    position: relative;
    padding-top: 38.9%;
    overflow: hidden;
    background-image:url('https://s3.music.126.net/m/s/img/hot_music_bg_3x.jpg?2bfefd3ba37eaffbd66b7d108b9de26a') ;
    background-size: contain;
   
    .hotopct{
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index:2;
        padding-left: .20rem;
        box-sizing: border-box; 
        .u-hmsprt{
            background-image:url('https://s3.music.126.net/m/s/img/index_icon_3x.png?49a82fee3e0fc602e9c8b25df2bda159')
        }
       
        .hoticon{
            margin-top:-1.5rem
            width: 1.42rem;
            height: .67rem;
            z-index:3;
            background-size: 1.66rem .97rem;   
            background-position: -0.24rem -0.30rem;
        }
        .hottime{
            margin-top: .10rem;
            color: hsla(0,0%,100%,.8);
            font-size: .12rem;
            transform: scale(.91);
            transform-origin: left top;
            z-index:3;

        }
        ::after{
            position:absolute;
            top:0;
            left:0;
            bottom:0;
            right:0;
            z-index: 1;
            content: " ";
            background-color: rgba(0,0,0,.2)
        }
     
    }
`
export{
    HotNav
}