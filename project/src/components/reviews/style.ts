import styled from 'styled-components';
import { Title as T } from '../title/style';

export const Reviews = styled.section`
    max-width: 375px;
    margin: auto;
    background-color: ${props => props.theme.colors.khaki};
    color: ${props => props.theme.colors.white};
    padding-top: 1px;
`
export const Title = styled(T)`
    color: ${props => props.theme.colors.white};
`
export const Review = styled.div`
    width: 100%;
    height: auto;
    `
export const Circle = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
`
export const Name = styled.p`
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
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
`
