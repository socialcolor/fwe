import styled from 'styled-components';

export const Teachers = styled.section`
    max-width: 375px;
    margin: auto;
`
export const Teacher = styled.div`
    width: 130px;
    height: auto;
    `
export const Circle = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
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
`
