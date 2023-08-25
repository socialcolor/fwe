import styled from 'styled-components';

export const Features = styled.section`
    width: 100%;
    height: auto;
    margin: 0;
    padding: 24px 45px;
`

export const Title = styled.h3`
    margin: 0;
    margin-bottom: 31px;
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.36px;
    text-transform: uppercase;
`
export const Icons = styled.ul`
    margin: 0 auto;
    padding: 0;
    list-style-type: none;
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
`
export const IconImg = styled.img`
    display: block;
    margin: auto;
`
export const IconCaption = styled.p`
    margin: 0;
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.2px;
    text-transform: uppercase;
`
