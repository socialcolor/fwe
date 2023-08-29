import styled from 'styled-components';
import { DeviceQuery } from '../../styles/device-query';

export const Platform = styled.section`
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
    padding: 16px 35px 29px 35px; 
    background-color: ${props => props.theme.colors.khaki};

    @media ${DeviceQuery.tablet} {
        padding: 23px 48px 76px 48px;
    }
`
export const Wrapper = styled.div`
    max-width: 375px;
    margin: auto;

    @media ${DeviceQuery.tablet} {
        max-width: 665px;
        position: relative;
        z-index: 1;
    }
`
export const Title = styled.h3`
    width: 284px;
    margin: 0 auto;
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
        width: 563px;
        font-size: 28px;
        letter-spacing: 0.56px;
    }
`
export const Cirle = styled.p`
    position: relative;
    width: 205px;
    height: auto;
    padding: 15px;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: 50%;

    &::before {
        content: '';
        position: absolute;
        left: -52px;
        top: 70px;
        z-index: -1;
        display: block;
        width: 87px;
        height: 121px;
        background-image: url('./img/platform_arrow-down.svg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media ${DeviceQuery.tablet} {
        position: absolute;
        top: 200px;
        right: 70px;

        &::before {
            width: 252px;
            height: 71px;
            background-image: url('./img/platform_arrow-down-tablet.svg');
            top: -56px;
            left: -197px;
            z-index: -1;
        }
    }
    `
export const CircleText = styled.span`
    width: 162px;
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0.68px;
    text-transform: uppercase;
`
export const PlatformIndexImg = styled.div`
    position: relative;
    z-index: -1;
    display: block;
    width: 307px;
    height: 360px;
    margin: 26px auto 0 auto;
    background-image: url('img/platform_index.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    
    @media ${DeviceQuery.tablet} {
        z-index: -2;
        width: 379px;
        height: 444px;
        background-image: url('img/platform_index-tablet.jpg');
        margin: 0;
        margin-top: 91px;
    }
`
export const EllipseRight = styled.p`
    position: relative;
    width: 237px;
    height: auto;
    padding: 39px 22px;
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    
    &::before {
        content: '';
        position: absolute;
        left: 95px;
        bottom: 55px;
        z-index: -1;
        display: block;
        width: 140px;
        height: 291px;
        background-image: url('./img/platform_arrow-up.svg');
        background-size: cover;
        background-repeat: no-repeat;
    }
    
    @media ${DeviceQuery.tablet} {
        margin: 0;
        left: 400px;
        bottom: 140px;

        &::before {
            left: -130px;
            top: -73px;
            transform: scale(-1, 1) rotate(85deg);
        }
    }
` 
export const EllipseText = styled.span`
    width: 100%;
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0.72px;
    text-transform: uppercase;
`
export const EllipseLeft = styled(EllipseRight)`
    width: 246px;
    padding-top: 31px;
    padding-bottom: 30px;
    padding-left: 39px;
    padding-right: 39px;
    margin-left: initial;
    margin-right: auto;

    &::before {
        content: '';
        position: absolute;
        left: 132px;
        top: 43px;
        z-index: -1;
        display: block;
        width: 111px;
        height: 181px;
        background-image: url('./img/platform_arrow-left.svg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media ${DeviceQuery.tablet} {
        position: absolute;
        left: 0;
        bottom: 210px;
        
        &::before {
            top: 0;
            left: 210px;
            transform: rotate(270deg);
        }
    }
`
export const PlatformScheduleImg = styled.div`
    position: relative;
    display: block;
    width: 307px;
    height: 180px;
    margin: 26px auto 0 auto;
    z-index: -2;
    background-image: url('./img/platform_schedule.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    
    @media ${DeviceQuery.tablet} {
        width: 379px;
        height: 237px;
        background-image: url('./img/platform_schedule-tablet.jpg');
        margin: 0;
        margin-left: auto;
        margin-right: 28px;
    }
`
