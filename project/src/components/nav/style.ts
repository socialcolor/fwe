import styled from "styled-components"
import { DeviceQuery } from "../../styles/device-query"
import { Link } from "react-router-dom"

export const Nav = styled.nav`
    width: 213px;
    position: absolute;
    top: 69px;
    right: 21px;
    z-index: 2;
    max-height: 0;
    padding: 0;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    overflow: hidden;
    transition: max-height .3s linear;

    &.open {
    max-height: 500px;
    }

    @media ${DeviceQuery.tablet} {
        top: 101px;
    }
    @media ${DeviceQuery.desktop} {
        display: flex;
        width: 100%;
        max-height: initial;
        padding-top: 23px;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        position: initial;
        background: none;
    }
`
export const NavLink = styled(Link)`
    width: 100%;
    margin: 0;
    padding: 3px 13px;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.khaki };
    font-family: ${props => props.theme.fonts.title};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.greyLight};
    
    &:first-child {
        padding-top: 6px;
    }
    &:last-child {
        border-bottom: none;
        padding-bottom: 6px;
    }
    &:hover {
    text-decoration: underline;
    }
    &:active {
    text-decoration: underline;
    opacity: 0.6;
    }

    @media ${DeviceQuery.desktop} {
        width: initial;
        color: ${({theme}) => theme.colors.white };
        border: none;
        font-family: ${props => props.theme.fonts.text};
        font-size: 22px;
        font-weight: 500;
        line-height: 27px;
        padding:0;
        margin-right: 19px;

        &:hover {
            text-decoration: underline;
        }
        &:active {
            text-decoration: underline;
            opacity: 0.6;
        }

        &:first-child {
            padding: 0;
        }
        &:last-child {
            border-bottom: none;
            padding: 0;
            margin-right: 0px
        }
    }
 `
