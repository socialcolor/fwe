import styled from 'styled-components';
import { DeviceQuery } from '../../styles/device-query';

export const Header = styled.header<{$background: boolean;}>`
    width: 100%;
    position: relative;
    display: block;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.khaki};
    ${props => props.$background ? 
    `
      min-height: 100vh;
      max-height: auto;
      padding-bottom: 17px; 
      background-image: url(./img/background-mobile.jpg);
      background-size: cover;
      background-position-y: top;
      background-position-x: 99%;
      background-repeat: no-repeat;

      @media ${DeviceQuery.tablet} {
        background-image: url(./img/background-tablet.jpg);
      }
      @media ${DeviceQuery.desktop} {
        background-image: url(./img/background-desktop.jpg); 
      }
    `
    : ``};
  `
export const HeaderLogo = styled.div`
  display: block;
  width: 301px;
  height: 147px;
  margin: auto;
  margin-top: 29px;
  background-image: url('./img/header_logo-mobile.svg');
  background-repeat: no-repeat;
  background-size: contain;
  
  @media ${DeviceQuery.tablet} {
    width: 531px;
    height: 114px;
    margin-top: 91px;
    background-image: url('./img/header_logo-tablet.svg');
  }
  @media ${DeviceQuery.desktop} {
    width: 647px;
    height: 127px;
    margin-top: 63px;
    background-image: url('./img/header_logo-desktop.svg');
  }
`
export const Title = styled.h1`
    width: 100%;
    padding: 0 20px;
    margin: auto;
    margin-top: 15px;
    font-family: ${props => props.theme.fonts.text};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    line-height: 36px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};

    @media ${DeviceQuery.tablet} {
      width: 85%;
      font-weight: 600;
      font-size: 38px;
      line-height: 55px;
      margin-top: 12px;
    }
    @media ${DeviceQuery.desktop} {
      width: 1000px;
      font-weight: 600;
      font-size: 56px;
      line-height: 70px;
      letter-spacing: 0.03em;
      margin-top: 15px;
    }
`
export const Description = styled.p`
    width: 100%;
    margin: auto;
    margin-top: 13px;
    padding: 0 50px;
    color: ${({ theme }) => theme.colors.yellow};
    font-family: ${props => props.theme.fonts.title};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    @media ${DeviceQuery.tablet} {
      width: 85%;
      font-size: 30px;
      line-height: 36px;
      margin-top: 10px;
    }
    @media ${DeviceQuery.desktop} {
      width: 542px;
      padding: 0px;
      font-size: 30px;
      line-height: 36px;
      margin-top: 15px;
    }
`
