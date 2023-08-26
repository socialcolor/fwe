import styled from 'styled-components';
import { Title as T } from '../title/style';

export const About = styled.section`
    width: 100%;
    height: auto;
    `
export const Img = styled.img`
    display: block;
    width: 268px;
    height: 328px;
    margin: auto;
    padding-top: 19px;
    object-fit: contain;
`

export const Description = styled.div`
    margin-top: 23px;
    padding: 20px 38px 29px 38px;
    background-color: ${props => props.theme.colors.grey};
`
export const Wrapper = styled.div`
    max-width: 375px;
    margin: auto;
`
export const Title = styled(T)`
    margin: 0;
    color: ${props => props.theme.colors.khaki};
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-style: italic;
    font-weight: 600;
    line-height: normal;
    text-transform: initial;
    text-align: left;
`
export const Text = styled.p`
    margin-bottom: 33px;
    color: ${[props => props.theme.colors.blackText]};
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    
    &:last-child {
        margin-bottom: 0;
    }
`
