import styled from 'styled-components';

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
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.4px;
    text-transform: uppercase;
`

export const TimelineBox = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    padding: 47px 0;
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
`
export const Line = styled.img`
    position: absolute;
    top: 90px;
    right: 0;
` 
export const TimelineColumnRight = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px 0 47px 0;

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
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
    background-color: ${props=>props.theme.colors.orangeLight};
    border-radius: 50%;
    color: ${props => props.theme.colors.white};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
export const MiddleText = styled.p`
    margin: 0;
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; 
`
export const UpperText = styled.p`
    /* margin: auto; */
    color: ${props => props.theme.colors.khaki};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.34px;
    text-transform: uppercase;
`
export const OrangeText = styled.span`
    color: ${props => props.theme.colors.orangeLight};
`
