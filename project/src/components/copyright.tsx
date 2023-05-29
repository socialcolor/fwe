import styled from "styled-components";

const StyledCopyright = styled.div`
    background-color: ${({theme}) => theme.colors.black};
    text-align: center;
    padding: 0;
    padding-top: 13px;
    padding-bottom: 13px;
`
const StyledText = styled.p`
    color: ${({theme}) => theme.colors.grey};
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 0;
`
export default function Copyright(): JSX.Element {
    return (
        <StyledCopyright>
            <StyledText>Copyright &copy; 2023 French with Emilie</StyledText>
        </StyledCopyright>
    )
}
