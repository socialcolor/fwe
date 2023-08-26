import styled, { css } from 'styled-components';

const arrow = css`
        display: block;
        margin: 10px auto 10px;
        width: 90px;
        height: 28px;
`
export const Section = styled.section`
    width: 100%;
    height: auto;
`
export const Circle = styled.div`
    max-width: 200px;
    margin: 0 auto;
    text-align: center;
`
export const Img = styled.img`
    width: 160px;
    height: 160px;
`
export const Caption = styled.p`
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-transform: uppercase;
`
export const Description = styled.div`
    padding-top: 30px;
    padding-bottom: 10px;
    background-color: ${props => props.theme.colors.khaki};
    color: ${props => props.theme.colors.white};
`
export const Wrapper = styled.div`
    max-width: 375px;
    margin: auto;
`
export const Text = styled.p`
    margin: 0 19px;
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.19px;
`

export const MoreText = styled(Text) <{ $height: number }>`
    height: ${props => props.$height}px;
    transition: height 0.7s ease-in;
    overflow: hidden;
`
export const MoreButton = styled.button<{ $show: number }>`
    outline: 0;
    border: 0;
    padding: 0;
    margin: 26px auto 0;
    display: block;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration-line: underline;
    text-transform: uppercase;
    text-align: center;
    background: none;
    color: ${props => props.theme.colors.orangeDark};
    ${props => props.$show ? css`
     &::before {
        content: url('./img/arrow-up.svg');
        ${arrow}
       }` : css`
     &::after {
        content: url('./img/arrow-down.svg');
        ${arrow}
      }`
    }

`
export const Achievements = styled.ul`
    margin: auto;
    padding: 39px 0 0 0;
    background-color: ${props => props.theme.colors.white};
    list-style-type: none;
    font-family: ${props => props.theme.fonts.title};
`
export const AchievementsItem = styled.li`
    display: block;
    margin-bottom: 15px; 

    &:last-child {
        margin-bottom: 0;
    }
`
export const AchievementsNumber = styled.p`
    margin: 0;
    color: ${props => props.theme.colors.orangeLight}; 
    text-align: center;
    font-size: 68px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
`
export const AchievementsName = styled.p`
    width: 190px;
    height: auto;
    margin: 0 auto;
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
`
