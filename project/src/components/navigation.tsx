import styled from 'styled-components';
import Nav from './nav';
import { DeviceQuery } from '../styles/device-query';
import { useState } from 'react';


const StyledNvigation = styled.div`
    width: 100%;
    height: auto;
    position: relative;

    &::after {
      position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    bottom: 0px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
  }
  `
const StyledWrpper = styled.div`
    width: 100%;
    max-width: 1440px;
    min-height: 99px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    padding-top: 18px;
    padding-left: 70px;

    @media ${DeviceQuery.mobile} {
    position: relative;
    min-height: auto;
    padding-top: 13px;
    padding-left: 27px;
    padding-bottom: 12px;
  }
`
const StyledBurger = styled.div`
      display: none;
      @media ${DeviceQuery.mobile} {
        display: block;
        position: absolute;
        top: 26px;
        right: 28px;
        cursor: pointer;
  
        & .bar-top,
        & .bar-mid,
        & .bar-bot {
          background: ${({theme}) => theme.colors.white};
          display: block;
          transform: rotate(0deg);
          transition: .5s ease all;
          border-radius: 8px;
          width: 33px;
          height: 2px;
          margin-bottom: 7px;
        }
  
        & .bar-bot {
          margin-bottom: 0;
        }

        &.open .bar-top {
          transform: rotate(45deg);
          transform-origin: 15% 15%;
        }

        &.open .bar-mid {
          opacity: 0;
        }

        &.open .bar-bot {
          transform: rotate(-45deg);
          transform-origin: 15% 95%;
          margin-bottom: 0;
        }
      }

`
const StyledLink = styled.a`
    margin-right: 280px;
    width: 112px;
    height: 71px;
    background-image: url('./img/nav_logo.svg');
    background-size: contain;
    background-repeat: no-repeat;

    @media ${DeviceQuery.mobile} {
      margin: 0;
      width: 66px;
      height: 45px;
      background-image: url('./img/nav_logo_mobile.svg');
      background-size: contain;
      background-repeat: no-repeat;
  }
`

export default function Navigation(): JSX.Element {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);
  const toggleMenuMode = () =>toggleMenu(!isMenuOpen);

  return (
    <StyledNvigation>
      <StyledWrpper>
        <StyledLink />
        <Nav menu={isMenuOpen}/>
        <StyledBurger className={isMenuOpen ? 'open' : ''} onClick={toggleMenuMode}>
          <span className="bar-top"></span>
          <span className="bar-mid"></span>
          <span className="bar-bot"></span>
        </StyledBurger>
      </StyledWrpper>
    </StyledNvigation>
  )
}
