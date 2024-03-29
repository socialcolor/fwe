import styled from 'styled-components';
import { DeviceQuery } from '../../styles/device-query';

export const Timeline = styled.section`
    width: 100%;
    height: auto;
    padding: 47px 29px;
    padding-bottom: 0;
`
export const Title = styled.h3`
    width: 250px;
    margin: 0 auto;
    padding: 0;
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    @media ${DeviceQuery.tablet} {
        width: 100%;
        margin-bottom: 89px;
        font-size: 28px;
        letter-spacing: 0.56px;
    }
    @media ${DeviceQuery.desktop} {
        margin-bottom: 50px;
        font-size: 36px;
        letter-spacing: 0.72px;
    }
`

export const TimelineBox = styled.div`
    max-width: 375px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    padding: 47px 0;
    padding-bottom: 42px;

    @media ${DeviceQuery.tablet} {
        max-width: 553px;
        padding-top: 0;
    }
    @media ${DeviceQuery.desktop} {
        max-width: 1258px;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0 auto;
        padding: 0;
        padding-bottom: 60px;
    }
`
export const TimelineColumnLeft = styled.div`
    position: relative;
    margin-right: 8px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        z-index: 1;
        display: block;
        width: 5px;
        height: 100%;
        background-color: ${props => props.theme.colors.orangeLight}
    } 

    &::after {
        content: '';
        width: 27px;
        height: 585px;
        position: absolute;
        top: 97px;
        right: 0;
        background-image: url('./img/timeline_line.svg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top left;
    }

    @media ${DeviceQuery.tablet} {
        margin-right: 78px;
        
        &::after{
            width: 31px;
            height: 706px;
            top: 120px;
            right: -25px;
        }
    }

    @media ${DeviceQuery.desktop} {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        column-gap: 28px;

        &::before {
            width: 1258px;
            height: 5px;
            top: calc(50% + 5px);
            right: initial;
            left: 0;
        }
        
        &::after {
            width: 710px;
            height: 33px;
            top: 180px;
            right: 276px;
            background-position: center;
            background-image: url('./img/timeline_line-desktop.svg');
        }
    }
`
export const TimelineColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px 0 47px 0;

    @media ${DeviceQuery.desktop} {
        flex-direction: row;
        padding: 0 26px;
    }
`
export const Rectangle = styled.p`
    position: relative;
    z-index: 2;
    width: 193px;
    height: auto;
    margin: 0 auto;
    padding: 12px 32px;
    border-radius: 25px;
    border: 1px solid ${props => props.theme.colors.orangeLight};
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media ${DeviceQuery.tablet} {
        width: 221px;
        padding: 12px 0;
        font-size: 34px;
    }

   @media ${DeviceQuery.desktop} {
        width: 243px;
        min-height: 112px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 12px 0;
   }
`
export const Circle = styled.p`
    position: relative;
    z-index: 2;
    width: 120px;
    height: 120px;
    margin: 26px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.orangeLight};
    border-radius: 50%;
    color: ${props => props.theme.colors.white};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media ${DeviceQuery.tablet} {
        width: 158px;
        height: 148px;
        margin: 28px auto;
        padding: 35px 20px;
        font-size: 32px;
        font-weight: 400;
    }

    @media ${DeviceQuery.desktop} {
        width: 158px;
        height: 158px;
        margin: 0;
        padding: 35px 20px;
        font-size: 36px;
        font-weight: 400;
    }
`
export const MiddleText = styled.p`
    margin: 0;
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; 

    @media ${DeviceQuery.tablet} {
        width: 199px;
        font-size: 28px;
        font-weight: 500;
    }
    @media ${DeviceQuery.desktop} {
        width: 186px;
        font-size: 24px;
        font-weight: 400;
        line-height: 25px;
    }
`
export const BigText = styled.p`
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: ${props => props.theme.fonts.title};
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.34px;
    text-transform: uppercase;

    @media ${DeviceQuery.tablet} {
        width: 240px;
        font-size: 26px;
        font-weight: 500;
        letter-spacing: 0.52px;
    }
    @media ${DeviceQuery.desktop} {
        width: 603px;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0.48px;
        margin-top: 70px;
        margin-bottom: 0;
    }
`
export const OrangeText = styled.span`
    color: ${props => props.theme.colors.orangeLight};
`
