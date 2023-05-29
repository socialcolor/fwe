import styled from 'styled-components';
import Navigation from './navigation';
import { DeviceQuery } from '../styles/device-query';

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
    background-position-y: top;
    background-position-x: 99%;
    background-repeat: no-repeat;

    @media ${DeviceQuery.mobile} {
      padding-bottom: 17px; 
    }
  `
const StyledLogo = styled.div`
  display: block;
  width: 646px;
  height: 124px;
  margin: auto;
  margin-top: 63px;
  background-image: url('./img/title_logo_large.svg');
  background-repeat: no-repeat;
  background-size: contain;
  margin:auto;

  @media ${DeviceQuery.mobile} {
    background-image: url('./img/title_logo_small.svg');
    width: 301px;
    height: 147px;
    margin: auto;
    margin-top: 30px;
  }
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
    
    @media ${DeviceQuery.mobile} {
    width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 37px;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    text-align: center;
  }
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

    @media ${DeviceQuery.mobile} {
      width: 295px;
      font-size: 20px;
      line-height: 24px;
      margin-top: 10px;
  }
`
export default function Header(): JSX.Element {
  return (
    <HeaderStyled>
      <Navigation />
      <StyledLogo/>
      <StyledTitle>Онлайн-школа французского языка</StyledTitle>
      <StyledDescription>Персональные и групповые занятия для взрослых и детей</StyledDescription>
    </HeaderStyled>
  )
}
