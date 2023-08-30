import styled from 'styled-components';
import { DeviceQuery } from '../../styles/device-query';
import { Link as L } from 'react-router-dom';

export const Footer = styled.footer`
    width: 100%;
`
export const Wrapper = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.colors.khakiDark};
    font-family: ${props => props.theme.fonts.text};
    width: 100%;
    padding-top: 50px;
    padding-bottom: 11px;
    padding-left: 50px;
    padding-right: 73px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    @media ${DeviceQuery.tablet} {
        padding-top: 17px;
        padding-left: 102px;
        padding-bottom: 30px;
    }
    @media ${DeviceQuery.desktop} {
        min-width: 700px;
        padding-left: 540px;
        padding-top: 25px;
        padding-bottom: 100px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
`
export const Logo = styled.div`
    position: absolute;
    width: 84px;
    height: 46px;
    top: 50px;
    right: 19px;
    background-image: url(./img/footer_logo-mobile.svg);
    background-size: contain;
    background-repeat: no-repeat;
    
    @media ${DeviceQuery.tablet} {
        width: 192px;
        height: 118px;
        top: 16px;
        right: 69px;
        background-image: url(./img/footer_logo-tablet.svg);
    }
    @media ${DeviceQuery.desktop} {
        width: 194px;
        height: 121px;
        top: 24px;
        right: initial;
        left: 112px;
    }
`
export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
export const Caption = styled.h4`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.orange};
    margin: 0;

    @media ${DeviceQuery.tablet} {
        font-size: 22px;
        line-height: 27px;
    }
`
export const NavList = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    padding: 0;
    margin-top: 18px;
    margin-bottom: 11px;

    @media ${DeviceQuery.tablet} {
        margin-top: 13px;
        margin-bottom: 32px;
    }
`
export const NavLink = styled(L)`
    list-style-type: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 22px;
    padding: 0;
    margin: 0;
    margin-bottom: 7px;
    text-decoration: none;

    &:hover {
    text-decoration: underline;
    }
    &:active {
    text-decoration: underline;
    opacity: 0.6;
    }
    @media ${DeviceQuery.tablet} {
        font-size: 22px;
        line-height: 27px;
    }
`
export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-type: none;
    color: ${({ theme }) => theme.colors.white};

    @media ${DeviceQuery.desktop} {
        margin-right: 46px;
    }
`
export const ContactsCaption = styled(Caption)`
    margin-bottom: 17px;

    @media ${DeviceQuery.tablet} {
        margin-bottom: 15px;
        line-height: 27px;
    }
`
export const Text = styled.p`
    font-family: ${props => props.theme.fonts.text};
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    max-width: 350px;
    margin: 0;
    margin-bottom: 6px;

    @media ${DeviceQuery.tablet} {
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 0.36px;
        font-weight: 300;
    }
`
