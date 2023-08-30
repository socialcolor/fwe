import styled from 'styled-components';
import { Title as T } from '../title/style';
import { DeviceQuery } from '../../styles/device-query';


export const About = styled.section<{$height: string}>`
    width: 100%;
    padding-top: 37px;
    height: calc(${props => props.$height} - 206px);

    @media ${DeviceQuery.tablet} {
        width: 786px;
        margin: 0 auto;
    }
`
export const Img = styled.img`
    display: block;
    width: 268px;
    height: 328px;
    margin: auto;
    padding-top: 19px;
    object-fit: contain;

    @media ${DeviceQuery.tablet} {
        width: 679px;
        height: 858px;
        margin: 0;
        padding: 0;
        margin-left: -4px;
    }
`

export const Description = styled.div`
    margin-top: 23px;
    padding: 20px 38px 29px 38px;
    background-color: ${props => props.theme.colors.grey};
    
    @media ${DeviceQuery.tablet} {
        width: 677px;
        position: relative;
        z-index: 2;
        bottom: 214px;
        left: 91px;
        margin: 0;
        padding: 30px 57px 40px 60px;
    }
`
export const Wrapper = styled.div`
    max-width: 375px;
    margin: auto;

    @media ${DeviceQuery.tablet} {
        max-width: 100%;
        margin: 0;
    }
`
export const Title = styled(T)`
    margin: 0;
    color: ${props => props.theme.colors.khaki};
    font-family: ${props => props.theme.fonts.text};
    font-size: 36px;
    font-style: italic;
    font-weight: 600;
    line-height: normal;
    text-transform: initial;
    text-align: left;

    @media ${DeviceQuery.tablet} {
        font-size: 38px;
    }
`
export const Text = styled.p`
    margin-bottom: 33px;
    color: ${[props => props.theme.colors.blackText]};
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;

    &:nth-child(2) {
        margin-bottom: 0;
    }
    &:nth-child(3) {
        margin: 0;
    }
    &:last-child {
        margin-bottom: 0;
    }
    @media ${DeviceQuery.tablet} {
        width: 560px;
        font-size: 24px;
        font-weight: 500;
        line-height: 35px;

        &:nth-child(2) {
        margin-bottom: 33px;
        }
        &:nth-child(3) {
            margin: initial;
        }
    }
`
