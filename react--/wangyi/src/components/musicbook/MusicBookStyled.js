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
const SongListWrap =Styled.div`
    position: relative;
    padding-bottom: .24rem;
    display: flex;
    flex-wrap: wrap;
    margin-top:.40rem;
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
        .ear{
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
        .ear:after{
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
    .f-thide {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
    }
    .tit{
        margin: .02rem 0 -0.01rem;
        padding: 0 0.06rem;
        color: #fff;
        font-size: .13rem;
    }
    .sub {
        position: relative;
        padding: 0 .19rem 0 0.06rem;
        color: hsla(0,0%,100%,.6);
        font-size: .12rem;
        height: .20rem;
        overflow: hidden;
    }
    .author {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        position: relative;
        float: left;
    }
    .u-tag {
        display: inline-block;
        width: .10rem;
        height: .10rem;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ODg4NUM5M0FCMzUxMUU3QkJDQkNEQzlBMTE5NTFFQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOTBGMzZCRkFCNjUxMUU3QkJDQkNEQzlBMTE5NTFFQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOTBGMzZCRUFCNjUxMUU3QkJDQkNEQzlBMTE5NTFFQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNiM2VkY2U0LWIwZjMtNGZkYi1iYjgyLWVlNjhiM2QxNjZiMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBjZWFlNTY2LWYzYjEtMTE3YS04MjM2LWZhNWYwNjkxNWZiMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppto6ZUAAAViSURBVHja7FoNaFVlGP7u9Xrz7m67F12/akoZVqwfmpMIC60ItEiNpmUgQSNnWaGJEFQOhUhkaMVk4hKaWpqGloYR2QYJZRZSqP1gGdmYkonbvPu5c7s9785z7HQ4597tnnPaDp0Xnn3f+X7O7nPe73vf9/sJZTIZNRSSbigZSLNqU3pJogvP5vV/I/Ln6PixjUim27RpAmZYlP8OjDc8/1h6qvkmF79JFFgMhIHXgS43XhpmGpI/8UShumbSuH4kLk+qSHTkpToLuVY+UjR2meTvcZmsyKPAFYAMhXluvVQnLNoNpVovNHV3aB+y9c/zmYvpnpuzaF5kfrqz+xekBz0Y9c8a8i+4TViX9anWVH8mUZIUzVZl6SvqrwAaoF23DcHtwF3Ad8Ah4A7gTi8I7+1KdZ6AZlWsuECeF8pIt+l7HzAG2OKBdp9h+gXhmpbNhPuAN0XL4XBYFRTHk3h+3KbvY/JjoN2TLpFMALcBc4AFLNsAvMH8I/zI43Rjm7eVNkk95vKrRaOLS+KJuOpoS8mwrje1GQXMBZY6ILgauAWYCEwAkqb6BuAH5t8GngI+43Mv3NpppKeAP8RDwE29ki/hTqAOpF8GaRUdFS1Ld6WnouxrQ5tZ7LvTAWGxvrMNz23Ab8BJDuMaQ10lid0NTAbGGiBSl++Q1mVD+7m2tAQlGNaK/tAoMsx3A+0OCMs7Vxme3zMM6RqbIEQf0hsN5aug3cVOCbcA2zvbO1SsqN94zQdGs64IeJBDzqmsBJ6n7VhkMXWspJ5tpc8SkF3pxGiZXNQFFQqFVGGyKIbnJ1kuw/Avw3xyKm/RSKU5TzdmaVvHNtJ2AcjWOrXSRjnS093TCDelChL9w7qKUZdY5238wm7JDo6aXuBpG9sywqDZWSC7ww23ZJY14qIiIyMqVlhwA4f2A8A7HvjeoyR1BrhoUS8fo5m/+Se3/LBZPkWoeRyaVnFNyzKkjhjchZtSzvSwoWwyoUx15V4RzuhzWRYJWFwkXDJWuQiLpT4g/pU4wLJDbDPVK8IiWxF8nO3r7VMgLsZiu0eE9Vi5lC7vXg7dn5nfzZjac8J6ICL5fbTQbosYwzLmKxiELAduZTS2nD6/gm2mINIKe0VYD0S6PDJWIpPo52UKbQZuZPCRJmo4lzezTbFpbg8ulsYCIFc7CURiHu74XA98CSwDvsryG8QHbwLWAdflYzxDQ7WnNVQSVv8zCQgHhAPCAeGAcEA4IDx0EmmdOc2qPMp49ntTeSNDPFm5fMg491+S2H/Qdxqey3VnqUXddKXtWL4PHFPa5rhvh7Rsr6xR2qndTODdLP2Oc4XzAfuM8CPh17j2fQI4naOfrFGr2H4F+/qKsGhVNrirB9hPdg5lO/UhzuMVfIcvCIuBWs216GDlc0O/9XzXsCcs2yayqX4mz3fU0YDJOc88PxCW3cCPHLxD9ov1I5I5fiBcTg3ZyRTgY5X94OwTQ9vhHXgAVwF2d4BmkEyuufkr06v9oGGxsmNs6mstyB6zicx845ZabKIqEfPtMfk4z1m0m8C0xQ+EJV5+2Kb+RQYhsgu/H5jGeNos9zP9xg+E9yjt7PdKi/otnJdyCC7XHA5btJGwspL5PX4gLPc0zivrawYDkUWcEs3K2Z2P/9RoLWMMXT3I/nLItY55udHT7ZdYWjSzVml3LrbSVeXqJ5rdRwu91g/a1f2wLi8p7fxoidLucWzinJST+XNKu5E3kQaq0mDZa9lX+Y1wL11Ok9Ku6y5V2S+enSDRXb7a4rEok0X9Xi4qZPejTP1zAUwM07fc4tlptcUz3CU4PQwIB4QDwgHhgHBAOCAcEPZK/hZgAEdTXXaZE0liAAAAAElFTkSuQmCC') no-repeat;
        background-size: .30rem auto;
    }
    .u-tag-vip {
        background-position: 0 0;
    }
    .m-moreLists .icn {
        position: absolute;
        top: .05rem;
        right: -0.13rem;
    }

  

`
// const Img =Styled.div`
//     .m-card-sml .cover {
//         width: .40rem;
//         height: .40rem;
//     }
//     .m-card .cover {
//         float: left;
//         margin-right: .10rem;
//     }
// `
const MusicList=Styled.div `
    position: relative;
    min-height: 20px;
`
const SongsLists=Styled.div`
.item{
    display: flex
    color:#fff;
    padding-left:.10rem;
    z-index:22;
    .cover{
        width: .40rem;
        height: .40rem;
        float: left;
        margin-right: .10rem;
        .imgs{
            width:.40rem;
            height:.40rem;
        }
    }
    .wrap{
        flex: 1 1 auto;
        display: flex;
        position: relative
       .songwrap{
            padding: .06rem 0;
            width:2.75rem;
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
                color:hsla(0,0%,100%,.6);
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