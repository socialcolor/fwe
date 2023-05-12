import styled from 'styled-components';
import Nav from './nav';
import Logo from './logo';
import { LogoSize} from '../const';

const StyledNvigation = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  &::after {
    position: absolute;
  content: '';
  width: 100%;
  height: 1px;
  bottom: 0px;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  }
  `
const StyledWrpper = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 99px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding-top: 18px;
  padding-left: 70px;
`
const StyledLink = styled.a`
  margin-right: 280px;
`

export default function Navigation(): JSX.Element {
  return (
    <StyledNvigation>
      <StyledWrpper>
        <StyledLink>
          <Logo name={LogoSize.Default}/>
        </StyledLink>
        <Nav/>
      </StyledWrpper>
    </StyledNvigation>
  )
}
