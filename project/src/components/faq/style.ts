import styled from 'styled-components';

export const Faq = styled.section`
    width: 100%;
    height: auto;
    padding: 25px 0;
    padding-bottom: 5px;
`
export const Text = styled.p`
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const Questions = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`
export const Question = styled.li`
    border-top: 1px solid ${props => props.theme.colors.black};
    padding: 0 26px;
    overflow: hidden;
`
export const wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
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
`
export const Answer = styled.p<{ $height?: number; }>`
    max-height: ${props => props.$height? props.$height : 0}px;
    margin: 0;
    color: ${props => props.theme.colors.black};
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    transition: max-height linear 800ms;
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
