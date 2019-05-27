import Styled from 'styled-components'

const CategoriesContainer = Styled.div `
  display: flex;
  flex-direction: column;
`

const Header = Styled.header `
  height: .64rem;
  background: #d43c33;
  display:flex;
  justify-content: center;
  align-items: center;
  .login{
    width:.2rem;
    height:.2rem;
    color:#fff;
    font-size:.18rem;
    position:absolute;
    top:.20rem;
    left:.20rem;

  }
`
const Login = Styled.div`
  width:50%;
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  background:rgba(0,0,0,0.5);
  z-index:999;
  transition: transform .3s ease-in;
  div{
    width:50%;
    height:12%;
    margin:.2rem auto;
    border:.01rem solid #333;
    border-radius:50%;
    img{
      width:100%;
      height:100%
    }
  }
  p{
    width:100%;
    height:.5rem;
    margin:.1rem auto;
    color:#fff;
    line-height:.5rem;
    text-align:center;
  }
  .exit{
    position:absolute;
    width:.40rem;
    height:.4rem;
    right:.1rem;
    bottom:0;
    font-size:.18rem;
    color:#fff;
  }
  .in{
    position:absolute;
    width:.4rem;
    height:.4rem;
    font-size:.18rem;
    left:.1rem;
    bottom:0;
    color:#fff;
  }

`
export {
  CategoriesContainer,
  Header,
  Login
}