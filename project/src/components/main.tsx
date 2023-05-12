import styled from 'styled-components';
import Title from './title';

const StyledMain = styled.main`
    width: 100%;
    margin: auto;
    max-width: 1440px;
`

export default function Main(): JSX.Element {
  return (
    <StyledMain>
        <Title>В разработке</Title>
    </StyledMain>
  )
}
