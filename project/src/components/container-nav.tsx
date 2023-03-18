import styled from "styled-components"

interface IContainerNav {
    width?: string
}
const ContainerNavStyled = styled.div<IContainerNav>`
width: ${props => props.width ? props.width : '1440px'};
height: 99px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
align-content: start;
flex-wrap: wrap;
`

type ContainerNavProps = {
    children?: React.ReactNode;
    width?: string;
}

export default function ContainerNav({children, width}: ContainerNavProps): JSX.Element {
    return (
        <ContainerNavStyled width={width}>
            {children}
        </ContainerNavStyled>
    )
}
