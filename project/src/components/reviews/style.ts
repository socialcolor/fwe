import styled from 'styled-components';
import { Title as T } from '../title/style';
import { DeviceQuery } from '../../styles/device-query';

export const Reviews = styled.section`
    margin: auto;
    background-color: ${props => props.theme.colors.khaki};
    color: ${props => props.theme.colors.white};
    padding-top: 1px;
`

export const Wrapper = styled.div`
    max-width: 375px;
    margin: 0 auto;

    @media ${DeviceQuery.tablet} {
        max-width: 768px;
        padding-bottom: 30px;
    }
    @media ${DeviceQuery.tablet} {
        max-width: 1000px; 
        padding-bottom: 30px;
    }
`
export const ReviewWrapper = styled.div`
`
export const Title = styled(T)`
    color: ${props => props.theme.colors.white};
`
export const Review = styled.div`
    width: 100%;
    height: auto;

    @media ${DeviceQuery.desktop} {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-start;
    }
`
export const Circle = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
`
export const Name = styled.p`
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;

    @media ${DeviceQuery.tablet} {
        font-size: 20px;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`
export const Caption = styled.p`
    width: 266px;
    margin: auto;
    text-align: center;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 1.53px;
    padding-bottom: 24px;
    margin-top: 10px;

    @media ${DeviceQuery.tablet} {
        width: 500px;
        font-size: 20px;
        line-height: 36px;
        letter-spacing: 1.8px;
    }
`
