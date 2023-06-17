import styled from 'styled-components';
import Prices from './prices';

const StyledMain = styled.main`
    width: 100%;
    margin: auto;
    max-width: 1440px;
`

export default function Main(): JSX.Element {
  return (
    <StyledMain>
        <Prices />
    </StyledMain>
  )
}
