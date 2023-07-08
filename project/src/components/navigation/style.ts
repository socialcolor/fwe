import styled from 'styled-components'
import { DeviceQuery } from '../../styles/device-query'
import { Link } from 'react-router-dom'

export const Nvigation = styled.div`
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
export const Wrpper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1440px;
    min-height: auto;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    padding-top: 13px;
    padding-left: 27px;
    padding-bottom: 12px;

  @media ${DeviceQuery.tablet} {
    padding-top: 14px;
    padding-bottom: 17px;
    padding-left: 62px;
  }
  @media ${DeviceQuery.desktop} {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 18px;
    padding-left: 69px;
    padding-bottom: 10px;
  }
`
export const Burger = styled.div`
    display: block;
    position: absolute;
    top: 26px;
    right: 27px;
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
      margin-bottom: 5px;
    }

    & .bar-bot {
      margin-bottom: 0;
    }

    &.open .bar-top {
      transform: rotate(45deg);
      transform-origin: 25% 100%;
    }

    &.open .bar-mid {
      opacity: 0;
    }

    &.open .bar-bot {
      transform: rotate(-45deg);
      transform-origin: 15% 0%;
      margin-bottom: 0;
    }

    @media ${DeviceQuery.tablet} {
      top: 40px;
      right: 61px;
    }
    @media ${DeviceQuery.desktop} {
      display: none;
    }
`
export const LogoLink = styled(Link)`
    margin: 0;
    width: 66px;
    height: 45px;
    background-image: url('./img/nav_logo-mobile.svg');
    background-size: contain;
    background-repeat: no-repeat;

      
  @media ${DeviceQuery.tablet} {
    width: 112px;
    height: 71px;
    background-image: url('./img/nav_logo-tablet.svg');
  }

  @media ${DeviceQuery.desktop} {
    width: 135px;
    margin-right: 109px;
  }
`
