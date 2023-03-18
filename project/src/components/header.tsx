import styled from 'styled-components';
import Nav from './nav';

const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  height: 763px;
  margin: auto;
  display: block;
  background-blend-mode: multiply;
  background-color: rgba(63, 72, 44, 0.63);
  background-image: url('img/background.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  z-index: 999;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    content: '';
    background-color: rgba(63, 72, 44, 0.78);
    z-index: -1;
  }
  `

export default function Header(): JSX.Element {
  return (
    <HeaderStyled>
        <Nav />
    </HeaderStyled>
  )
}
