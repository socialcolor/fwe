import styled from 'styled-components';

type TitleProps = {
    children: string | JSX.Element | JSX.Element[],
}

const StyledTitle = styled.h2`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0.02em;
    color: ${({theme}) => theme.colors.khaki};
    padding: 0;
    margin: 150px auto;
`

export default function Title({children}:TitleProps): JSX.Element {
    return (
    <StyledTitle>
        {children}
    </StyledTitle>
    )
}
