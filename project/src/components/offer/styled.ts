import styled, { css } from 'styled-components';
import { DeviceQuery } from '../../styles/device-query';
import Title from '../title';

const arrow = css`
        display: block;
        margin: 10px auto 10px;
        width: 90px;
        height: 28px;
`
export const Offer = styled.section`
    width: 100%;
    height: auto;
`
export const Cilres = styled.div`
    @media ${DeviceQuery.tablet} {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: center;
        column-gap: 31px;
    }
    @media ${DeviceQuery.desktop} {
        margin-top: 66px;
        padding-bottom: 65px;
    }
`
export const Circle = styled.div`
    max-width: 200px;
    margin: 0 auto;
    text-align: center;

    @media ${DeviceQuery.tablet} {
        margin: 0;
    }
    @media ${DeviceQuery.desktop} {
        max-width: 250px;
    }
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

    @media ${DeviceQuery.desktop} {
        font-size: 32px;
        margin-top: 30px;
        margin-bottom: 0px;
    }
`
export const Description = styled.div`
    padding-top: 30px;
    padding-bottom: 10px;
    background-color: ${props => props.theme.colors.khaki};
    color: ${props => props.theme.colors.white};

    @media ${DeviceQuery.desktop} {
        max-width: 1210px;
        margin: auto;
        border-radius: 20px;
        padding: 31px 0;
    }
`
export const Wrapper = styled.div`
    max-width: 375px;
    margin: auto;

    @media ${DeviceQuery.tablet} {
        max-width: 100%;
    }
`
export const DescriptTitle = styled(Title)`
    width: 100%;
    margin: 0 auto 29px;
    color: ${props => props.theme.colors.white};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    @media ${DeviceQuery.tablet} {
        width: 375px;
        font-size: 28px;
        letter-spacing: 0.56px;
    }
    @media ${DeviceQuery.desktop} {
        width: 500px;
        font-size: 36px;
        letter-spacing: 0.72px;
        margin-bottom: 30px;
    }
`
export const Text = styled.p`
    margin: 0 19px;
    padding-top: 20px;
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.19px;

    @media ${DeviceQuery.tablet} {
        max-width: 684px;
        margin: 0 auto;
        font-size: 26px;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.26px;
    }
    @media ${DeviceQuery.desktop} {
        max-width: 1174px;
        font-size: 30px;
        letter-spacing: 0.3px;
        /* padding-top: 0; */
    }
`

export const MoreText = styled.div <{ $height: number }>`
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
    font-family: ${props => props.theme.fonts.title};
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

    @media ${DeviceQuery.tablet} {
        font-size: 18px;
    }
    @media ${DeviceQuery.desktop} {
        font-size: 27px;
        margin-top: 30px;
    }

`
export const Achievements = styled.ul`
    margin: auto;
    padding: 39px 0 0 0;
    background-color: ${props => props.theme.colors.white};
    list-style-type: none;
    font-family: ${props => props.theme.fonts.title};

    @media ${DeviceQuery.tablet} {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: center; 
        column-gap: 14px;
    }
    @media ${DeviceQuery.desktop} {
        width: 1077px;
        justify-content: space-between;
        column-gap: 190px;
    }
`
export const AchievementsItem = styled.li`
    display: block;
    margin-bottom: 15px; 

    &:last-child {
        margin-bottom: 0;
    }

    @media ${DeviceQuery.desktop} {
        margin: 0;
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

    @media ${DeviceQuery.desktop} {
        font-size: 90px;
    }
`
export const AchievementsName = styled.p`
    width: 190px;
    height: auto;
    margin: 0 auto;
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;

    @media ${DeviceQuery.desktop} {
        font-size: 28px;
    }
`
