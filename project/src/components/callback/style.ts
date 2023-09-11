import styled from 'styled-components';
import { Title as T } from '../title/style';
import { DeviceQuery } from '../../styles/device-query';

export const Form = styled.form`
    padding-top: 23px;
    padding-bottom: 35px;
    background-color: ${({ theme }) => theme.colors.grey};

    @media ${DeviceQuery.desktop} {
        padding-top: 43px;
        padding-bottom: 52px;
    }
`
export const Title = styled(T)`
    margin: 0;
    margin-bottom: 12px;
    font-family: ${props => props.theme.fonts.title};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    text-transform: initial;
    line-height: normal;
    color: ${({ theme }) => theme.colors.khaki};

    @media ${DeviceQuery.tablet} {
        width: 601px;
        margin: auto;
        font-size: 28px;
    }
    @media ${DeviceQuery.desktop} {
        width: 976px;
        margin: auto;
        font-size: 48px;
    }
`
export const UpperOrangeText = styled.span`
    color: ${props => props.theme.colors.orangeLight};
    text-transform: uppercase;

`
export const Text = styled.p`
    width: 311px;
    margin: auto;
    color: ${props => props.theme.colors.khaki };
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media ${DeviceQuery.tablet} {
        width: 484px;
        font-size: 24px;
    }
    @media ${DeviceQuery.desktop} {
        width: 645px;
        font-size: 32px;
    }
`
export const Signature = styled.p`
    width: 311px;
    margin: auto;
    color: ${props => props.theme.colors.black};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
    @media ${DeviceQuery.tablet} {
        width: 537px;
        font-size: 17px;
        font-weight: 400;
        line-height: 28px;
        padding-bottom: 17px;
    }
    @media ${DeviceQuery.desktop} {
        width: 757px;
        font-size: 24px;
    }
`
export const MailLink = styled.a`
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media ${DeviceQuery.desktop} {
        font-size: 24px;
    }
`
export const WrappersInput = styled.div`
    padding: 0;
    padding-top: 29px;
    padding-bottom: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;

    @media ${DeviceQuery.tablet} {
        padding-top: 47px;
        padding-bottom: 18px;
    }
    @media ${DeviceQuery.desktop} {
        width: 964px;
        margin: auto;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 32px;
        margin-top: 82px;
        margin-bottom: 25px;
    }
`

export const Input = styled.input`
    font-family: ${props => props.theme.fonts.title};
    width: 292px;
    height: 52px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 1px solid ${({theme}) => theme.colors.khaki};
    border-radius: 6px;
    background-color: ${({theme}) => theme.colors.white};
    padding: 14px 0 14px 10px;
    color: ${props => props.theme.colors.black};
    
    &::placeholder {
        text-transform: capitalize;
        opacity: .7;
    }
    
    @media ${DeviceQuery.desktop} {
        font-size: 24px;
        width: 300px;
        height: 60px;
    }
`
export const button = styled.button<{$color: string}>`
    display: block;
    margin: auto;
    margin-top: 13px;
    padding: 18px 14px;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.title};
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    outline: none;
    border: none;
    background-color: ${props => props.$color};

    &:hover {
        opacity: 0.7;
    }
    &:active {
        opacity: 0.9;
    }

    @media ${DeviceQuery.desktop} {
        font-size: 27px;
        padding: 34px 85px;
    }
`
