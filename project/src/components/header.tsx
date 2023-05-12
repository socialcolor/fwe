import styled from 'styled-components';
import Navigation from './navigation';

const HeaderStyled = styled.header`
    width: 100%;
    min-height: 100vh;
    max-height: auto;
    position: relative;
    margin: auto;
    display: block;
    background-color: ${({ theme }) => theme.colors.khaki};
    background-image: url(../img/background.jpg);
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  `
const StyledLogo = styled.img`
  display: block;
  margin: auto;
  margin-top: 63px;
`
const StyledTitle = styled.h1`
    width: 991px;
    margin: auto;
    margin-top: 15px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    text-align: center;
    line-height: 70px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
`
const StyledDescription = styled.p`
    width: 542px;
    margin: auto;
    margin-top: 14px;
    color: ${({ theme }) => theme.colors.yellow};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
`
export default function Header(): JSX.Element {
  return (
    <HeaderStyled>
      <Navigation />
      <StyledLogo src="./img/logo-large.svg" />
      <StyledTitle>Онлайн-школа французского языка</StyledTitle>
      <StyledDescription>Персональные и групповые занятия для взрослых и детей</StyledDescription>
    </HeaderStyled>
  )
}
