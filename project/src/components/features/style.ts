import styled from 'styled-components';
import { DeviceQuery } from '../../styles/device-query';

export const Features = styled.section`
    width: 100%;
    height: auto;
    margin: 0;
    padding: 24px 45px;

    @media ${DeviceQuery.tablet} {
     padding: 50px 58px;
    }
`

export const Title = styled.h3`
    margin: 0;
    margin-bottom: 31px;
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.36px;
    text-transform: uppercase;

    @media ${DeviceQuery.tablet} {
        font-size: 28px;
        line-height: 0.56px;
        margin-bottom: 46px;
    }
    @media ${DeviceQuery.desktop} {
        font-size: 36px;
        line-height: 0.72px;
        margin-bottom: 60px;
    }
`
export const Icons = styled.ul`
    margin: 0 auto;
    padding: 0;
    list-style-type: none;

    @media ${DeviceQuery.tablet} {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        column-gap: 140px;
        row-gap: 19px;
    }
    @media ${DeviceQuery.desktop} {
        align-items: stretch;
    }
`
export const Icon = styled.li`
    width: 256px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 32px;
    padding: 10px 0;
    display: block;
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: 44px;

    &:last-child {
        margin-bottom: 0;
    }

    @media ${DeviceQuery.tablet} {
        margin: 0;
    }
    @media ${DeviceQuery.desktop} {
        width: 350px;
        margin: 0;
        padding: 27px 0;
    }
`
export const IconImg = styled.img`
    display: block;
    margin: auto;
`
export const IconCaption = styled.p`
    margin: 0;
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.2px;
    text-transform: uppercase;

    @media ${DeviceQuery.desktop} {
        width: 248px;
        margin: 0 auto;
        margin-top: 32px;
    }
`
