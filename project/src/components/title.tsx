import styled from 'styled-components';
import { DeviceQuery } from '../styles/device-query';

type TitleProps = {
    children: string | JSX.Element | JSX.Element[],
    as?: React.ElementType,
}


const StyledTitle = styled.h2`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: ${({theme}) => theme.colors.khaki};
    padding: 0;
    margin: 24px auto;

    @media ${DeviceQuery.desktop} {
        font-size: 36px;
        line-height: 44px;
    }
`

export default function Title({children, as = 'h2'}:TitleProps): JSX.Element {
    return (
    <StyledTitle forwardedAs={as}>
        {children}
    </StyledTitle>
    )
}
