import styled from "styled-components";
import { DeviceQuery } from "../../styles/device-query";

export const Compare = styled.section`
    width: 100%;
    height: auto;

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

    @media ${DeviceQuery.desktop} {
        font-size: 36px;
        line-height: 44px;
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
`
export const Table = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.green};
    font-family: ${props => props.theme.fonts.title};
    display: flex;
    flex-direction: column;
`
export const TableWrapper = styled.div`
    max-width: 400px;
    margin: auto;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
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
    text-align: left;

    &:nth-child(odd){
        padding: 0 5px 37px 15px;
        border-right: 1px solid ${props => props.theme.colors.white};
    }
    &:nth-child(even){
        padding-left: 15px;
        padding-right: 5px;
    }
`
