import styled from "styled-components"
import { Menu } from '../const';


const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    padding: 22px 0 0 10px;
`

const StyledNavLink = styled.a`
    list-style-type: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 22px;
    line-height: 27px;
    margin-right: 19px;
    text-decoration: none;

    &:hover {
    text-decoration: underline;
    }
    &:active {
    text-decoration: underline;
    opacity: 0.6;
    }
 `
export default function Nav(): JSX.Element {
    return (
        <StyledNav >
            {Object.values(Menu).map((item) => (
                <StyledNavLink key={item.name} href={item.link} >{item.name}</StyledNavLink>
            ))}
        </StyledNav>
    )
}
