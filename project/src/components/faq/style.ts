import styled from 'styled-components';
import { Title as T } from '../title/style';
import { DeviceQuery } from '../../styles/device-query';

export const Faq = styled.section`
    max-width: 375px;
    margin: auto;
    height: auto;
    padding: 25px 0;
    padding-bottom: 5px;

    @media ${DeviceQuery.tablet} {
        max-width: 768px;
        padding: 0;
    }
`
export const Title = styled(T)`
    @media ${DeviceQuery.tablet} {
        font-size: 28px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`
export const Text = styled.p`
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media ${DeviceQuery.tablet} {
        font-size: 24px;
        margin-bottom: 62px;
    }
`

export const Questions = styled.ul`
    padding: 0;
    list-style-type: none;

    @media ${DeviceQuery.tablet} {
        margin: 0;
    }
`
export const Question = styled.li`
    border-top: 1px solid ${props => props.theme.colors.black};
    padding: 0 26px;
    overflow: hidden;
    margin-bottom: 10px;

    @media ${DeviceQuery.tablet} {
        padding-left: 39px;
        padding-right: 16px;
    }
`
export const wrapper = styled.div`
    margin: 0 auto;
    max-width: 375px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    @media ${DeviceQuery.tablet} {
        max-width: 768px;
    }
`
export const Caption = styled.h4`
    width: 262px;
    color: ${props => props.theme.colors.khaki};
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media ${DeviceQuery.tablet} {
        width: 100%;
    }
`
export const Answer = styled.p<{ $height?: number; }>`
    max-width: 375px;
    margin: 0 auto;
    max-height: ${props => props.$height ? props.$height : 0}px;
    color: ${props => props.theme.colors.black};
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    transition: max-height linear 800ms;

    @media ${DeviceQuery.tablet} {
        max-width: 100%;
    }
`
export const Icon = styled.p`
    width: 31px;
    height: 31px;
    color: ${props => props.theme.colors.khaki};
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 10px;
`
