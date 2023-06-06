import styled from "styled-components";

const StyledCopyright = styled.div`
    background-color: ${({theme}) => theme.colors.black};
    padding: 0;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
`
const StyledText = styled.p`
    color: ${({theme}) => theme.colors.grey};
    width: 270px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: auto;
`
export default function Copyright(): JSX.Element {
    return (
        <StyledCopyright>
            <StyledText>Copyright &copy; 2023 French with Emilie</StyledText>
        </StyledCopyright>
    )
}
