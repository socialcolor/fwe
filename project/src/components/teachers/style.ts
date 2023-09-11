import styled from 'styled-components';
import { DeviceQuery } from '../../styles/device-query';

export const Teachers = styled.section`
    max-width: 375px;
    margin: auto;

    @media ${DeviceQuery.tablet} {
        max-width: 768px;
    }
    @media ${DeviceQuery.desktop} {
        max-width: 1440px;
    }
`
export const Teacher = styled.div`
    width: 130px;
    height: auto;

    @media ${DeviceQuery.desktop} {
        width: 268px;
        height: auto;
    }
`
export const Circle = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;

    @media ${DeviceQuery.desktop} {
        width: 268px;
        height: 268px;
    }
`
export const Name = styled.p`
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;

    @media ${DeviceQuery.desktop} {
        font-size: 20px;
    }
`
export const Caption = styled.p`
    color: ${props => props.theme.colors.black};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 5px;

    @media ${DeviceQuery.desktop} {
        font-size: 28px;
    }
`
