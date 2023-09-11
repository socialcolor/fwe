import styled from "styled-components";
import { DeviceQuery } from "../../styles/device-query";

export const Compare = styled.section`
    width: 100%;
    height: auto;

    @media ${DeviceQuery.desktop} {
        width: 960px;
        margin: auto;
    }

`
export const Title = styled.h3`
    font-family: ${props => props.theme.fonts.title};
    font-style: normal;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.khaki};
    padding: 0;
    margin: 48px auto 42px auto;

    @media ${DeviceQuery.tablet} {
        font-size: 28px;
        line-height: 44px;
        margin-top: 64px;
        margin-bottom: 0;
    }

    @media ${DeviceQuery.desktop} {
        font-size: 39px;
        line-height: 44px;
        margin-top: 0;
    }

`
export const Text = styled.p`
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;

    @media ${DeviceQuery.tablet} {
        font-size: 24px;
        line-height: 44px;
        margin-top: 0;
        margin-bottom: 37px;
    }
    @media ${DeviceQuery.desktop} {
        font-size: 34px;
    }
`
export const Table = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.green};
    font-family: ${props => props.theme.fonts.title};
    display: flex;
    flex-direction: column;

    @media ${DeviceQuery.tablet} {
        background-color: transparent;
        padding-bottom: 29px;
    }
`
export const TableWrapper = styled.div`
    max-width: 400px;
    margin: auto;

    @media ${DeviceQuery.tablet} {
        width: 100%;
        max-width: 768px;
        padding: 0 39px;
    }
    @media ${DeviceQuery.desktop} {
        width: 100%;
        max-width: 960px;
        padding: 0;
    }
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    @media ${DeviceQuery.tablet} {
        justify-content: space-between;
        align-items: stretch;
    }
`
export const TableTitle = styled.h4`
    width: 50%;
    text-align: center;
    max-width: 200px;
    margin: 0;
    padding-top: 18px;
    padding-bottom: 40px;
    color: ${props => props.theme.colors.black};
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.17px;
    text-decoration-line: underline;
    text-transform: uppercase;
    &:first-child{
        border-right: 1px solid ${props => props.theme.colors.white};
    }
    
    @media ${DeviceQuery.tablet} {
        max-width: 50%;
        width: 50%;
        color: ${props => props.theme.colors.khakiDark};
        font-size: 26px;
        font-weight: 500;
        padding: 0;
        margin-bottom: 31px;

        &:first-child{
        border-right: none;
        }
    }
    @media ${DeviceQuery.desktop} {
        width: 337px;
        max-width: 337px;
        margin: 0;
        padding: 0;
        margin-bottom: 31px;
        color: ${props => props.theme.colors.khakiDark};
        font-size: 26px;
        font-weight: 500;

        &:first-child{
        border-right: none;
        }
    }
`
export const TableText = styled.p`
    width: 50%;
    max-width: 200px;
    margin: 0;
    color: ${props => props.theme.colors.white};
    text-align: left;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.34px;

    &:nth-child(odd){
        padding: 0 5px 37px 15px;
        border-right: 1px solid ${props => props.theme.colors.white};
    }
    &:nth-child(even){
        padding-left: 15px;
        padding-right: 5px;
    }

    @media ${DeviceQuery.tablet} {
        width: 337px;
        max-width: 337px;
        min-height: 118px;
        background-color: ${props => props.theme.colors.green};
        border-radius: 40px;
        font-size: 28px;
        letter-spacing: 0.28px;
        text-align: initial;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 23px;
        padding: 11px 36px;
        text-align: center;

        &:nth-child(odd){
            padding: 11px 36px;
        }
        &:nth-child(even){
            padding: 11px 36px;
            background-color: ${props => props.theme.colors.orangeMiddle};
        }
    }

    @media ${DeviceQuery.desktop} {
        font-size: 30px;
    }
`
