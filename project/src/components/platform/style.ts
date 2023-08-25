import styled from 'styled-components';

export const Platform = styled.section`
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
    padding: 16px 35px 29px 35px; 
    background-color: ${props => props.theme.colors.khaki};
`
export const Title = styled.h3`
    width: 284px;
    margin: 0 auto;
    color: ${props => props.theme.colors.white};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.4px;
    text-transform: uppercase;
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
export const PlatformIndexImg = styled.img`
    position: relative;
    z-index: -1;
    display: block;
    margin: 26px auto 0 auto;
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
`
export const PlatformScheduleImg = styled.img`
    position: relative;
    z-index: -2;
    display: block;
    margin: 26px auto 0 auto;
`
