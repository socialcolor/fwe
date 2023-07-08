import styled, { css } from "styled-components";
import { DeviceQuery } from "../../styles/device-query";

export const Title = styled.h2`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.khaki};
    padding: 0;
    margin: 24px auto;

    @media ${DeviceQuery.desktop} {
        font-size: 36px;
        line-height: 44px;
    }
`