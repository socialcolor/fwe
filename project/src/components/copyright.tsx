import styled from "styled-components";

const StyledCopyright = styled.div`
    background-color: ${({theme}) => theme.colors.black};
    text-align: center;
    color: ${({theme}) => theme.colors.grey};
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding: 13px 0;
`

export default function Copyright(): JSX.Element {
    return (
        <StyledCopyright>
            <p>Copyright &copy; 2023 French with Emilie</p>
        </StyledCopyright>
    )
}
