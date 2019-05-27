import Styled from 'styled-components'
import border from  'components/styled/border'
const SelectContainer =Styled.div`
    position: fixed;
    top: .64rem;
    left: 0;
    flex-direction: column;

`
const Header = Styled.header `
  height: .44rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Nav = Styled.nav `
  width: 3.75rem;
  height: .4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 1.1rem;
    height: 100%;
    border-radius: 15px;
    background: #d43c33;
    left: ${ props => props.dir === 'left' ? '1.6%' : (props => props.dir === 'middle' ? '35%' : '68.5%')};
    z-index: 1;
    transition: all 200ms ease-in;
  }
  div {
    width: 50%;
    text-align: center;
    color: #333;
    position: relative;
    font-size:.15rem
    z-index: 2;
    &:nth-child(1) {
      color: ${ props => props.delayDir === 'left' ? '#fff;' : '#333'};
    }
    &:nth-child(2) {
      color: ${ props => props.delayDir === 'middle' ? '#fff;' : '#333'};
    }
    &:nth-child(3) {
      color: ${ props => props.delayDir === 'right' ? '#fff;' : '#333'};
    }
  }
`

const BorderedNav = border({
  component: Nav,
  color: '#fff',
  radius: 15
})

export {
    SelectContainer,
  Header,
  BorderedNav
}