import styled from "styled-components"
import { DeviceQuery } from "../../styles/device-query"

export const Price = styled.div`
    font-family: ${props => props.theme.fonts.title};
    width: 277px;
    height: 377px;
    display: flex !important;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
    align-content: center;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 16px;
    margin-bottom: 20px;

    @media ${DeviceQuery.tablet} {
        width: 308px;
        height: 337px;
        margin-bottom: 64px;
    }
    @media ${DeviceQuery.desktop} {
        width: 509px;
        height: 648px;
        margin-bottom: 71px;
    }
`
export const Header = styled.div`
    width: 277px;
    min-height: 110px;
    padding: 21px 19px 15px 19px;
    border-radius: 15px 15px 0 0;
    background-color: ${({ theme }) => theme.colors.khakiSecondary};
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};

    @media ${DeviceQuery.tablet} {
        width: 308px;
        height: 110px;
    }
    @media ${DeviceQuery.desktop} {
        width: 100%;
        height: 232px;
    }
`
export const PriceIcon = styled.img`
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;

    @media ${DeviceQuery.desktop} {
        width: 100px;
        height: 100px;
    }
`
export const Title = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.khaki};
    margin: 0;
    margin-top: 14px;

    @media ${DeviceQuery.desktop} {
        font-size: 38px;
        font-weight: 500;
        line-height: initial;
    }
`
export const Body = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
`
export const PriceList = styled.ul`
    margin: auto;
    padding: 0;

    @media ${DeviceQuery.desktop} {
        list-style-type: none;
    }
`
export const PriceItem = styled.li`
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.khaki};
    margin: 0;

    @media ${DeviceQuery.desktop} {
        font-size: 38px;
        line-height: 39px;
        font-weight: 400;
    }
`
export const Button = styled.button`
    width: 225px;
    outline: 0;
    border: 0;
    margin: 0;
    padding: 18px 14px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.khaki};
    font-size: 17px;

    &:active {
        opacity: 0.7;
    }

    @media ${DeviceQuery.tablet} {
        width: 237px;
    }
    @media ${DeviceQuery.desktop} {
        width: 313px;
        padding: 34px 50px;
    }
`
