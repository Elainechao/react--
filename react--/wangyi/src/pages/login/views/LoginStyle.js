import Styled from 'styled-components';
const Logins = Styled.div`
    width:100%;
    height:100%;
    background:url('https://s3.music.126.net/m/s/img/recommand_bg_3x.png?f3a9aaa781c3bf3b543d129327d35fce') no-repeat;
    background-size:100% 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    div{
        display:flex;
        flex-direction: column;
        align-items: center;
        width:100%;
        heught:2.00rem;
        margin-top:1rem; 
    }
    span{
        width:60%;
        height:.5rem;
        border:2px solid red;
        border-radius:.40rem;
        margin:.2rem auto;
        font-size:.16rem;
        color:#d33a31;
        text-align:center;
        line-height:.5rem;
    }
   
`
const Wraps= Styled.div`
.logins{
    position:absolute;
    left:0;
    bottom:-1.2rem;
    top:0;
    right:0;
    transition: transform .3s ease-in;
    background-color:#fff;
}
.place{
    position:absolute;
    left:0;
    bottom:-1.2rem;
    top:0;
    right:0;
    transition: transform .3s ease-in;
    background-color:#fff;

}
.goout{
    position:absolute;
    left:.20rem;
    top:1.2rem;
    color:#333;    
}
`
export{Logins,Wraps}