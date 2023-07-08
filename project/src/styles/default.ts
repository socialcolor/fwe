import styled from "styled-components";
import { DeviceQuery } from "../styles/device-query";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    max-width: 900px;
    margin: auto;
    padding: 15px 20px;
`
export const Text = styled.p`
    margin: 10px auto 15px;
    font-family: 'Times New Roman', 'Inter', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
`
export const TitleH1 = styled.h1`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.khaki};
    padding: 0;
    margin: 25px auto 20px;

    @media ${DeviceQuery.desktop} {
        font-size: 36px;
    }
`

export const TitleH3 = styled.h3`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.khaki};
    padding: 0;
    margin: 25px auto 10px;

    @media ${DeviceQuery.desktop} {
        font-size: 28px;
    }
`

export const ButtonLink = styled(Link)`
    margin: 15px auto;
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    color: ${({theme}) => theme.colors.khaki};
    text-decoration: none;

    &:hover {
        opacity: 0.7;
    }
    &:active {
        opacity: 1;
    }
`
