import styled from 'styled-components';

export const Copyright = styled.div`
    background-color: ${({theme}) => theme.colors.black};
    padding: 0;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
`
export const Text = styled.p`
    color: ${({theme}) => theme.colors.greyDark};
    width: 270px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: auto;
`
