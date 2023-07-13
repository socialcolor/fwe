import styled from 'styled-components';
import { Title as T } from '../title/style';

export const Form = styled.form`
    padding-top: 23px;
    padding-bottom: 35px;
    background-color: ${({ theme }) => theme.colors.grey};
`
export const Title = styled(T)`
    margin: 0;
    margin-bottom: 12px;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    text-transform: initial;
    line-height: normal;
    color: ${({ theme }) => theme.colors.khaki};
`
export const UpperOrangeText = styled.span`
    color: ${props => props.theme.colors.orangeLight};
    text-transform: uppercase;

`
export const Text = styled.p<{ $color?: string, $weight: number }>`
    width: 311px;
    margin: auto;
    color: ${props => props.$color ? props.$color : ({ theme }) => theme.colors.black};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: ${props => props.$weight};
    line-height: normal;
`
export const MailLink = styled.a`
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
`

export const Input = styled.input`
    font-family: 'Inter', sans-serif;
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
`
export const button = styled.button`
    display: block;
    margin: auto;
    margin-top: 13px;
    padding: 18px 14px;
    color: ${props => props.theme.colors.white};
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    outline: none;
    border: none;
    background-color: ${props => props.theme.colors.yellowLight};

    &:hover {
        opacity: 0.7;
    }
    &:active {
        opacity: 0.9;
    }
`
