import styled from 'styled-components';
import Copyright from './copyright';
import Logo from './logo';
import { LogoSize } from '../const';
import { Menu } from '../const';

const StyledFooter = styled.footer`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.khakiDark};
`
const StyledWrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 24px 116px 18px 113px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`
const StyledNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
const StyledCaption = styled.h4<{ margin?: string }>`
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.orange};
    margin-bottom: ${({ margin }) => margin || 0};
`

// const StyledCaptionWhite = styled.p`
//     font-style: normal;
//     font-weight: 400;
//     font-size: 22px;
//     line-height: 27px;
//     text-transform: uppercase;
//     color: ${({ theme }) => theme.colors.white};
//     margin: 0;
//     padding: 0;

// `
const StyledNavList = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    padding: 0;
    margin-top: 34px;
`
const StyledNavLink = styled.a`
    list-style-type: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-style: normal;
    font-size: 22px;
    line-height: 27px;
    padding: 0;
    margin: 0;
    margin-bottom: 7px;
    text-decoration: none;
`
const StyledContacts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-type: none;
    color: ${({ theme }) => theme.colors.white};
    gap: 12px;
`
const StyledText = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.02em;
    max-width: 350px;
    white-space: pre-line;
`

export default function Footer(): JSX.Element {
    return (
        <StyledFooter>
            <StyledWrapper>
                <Logo name={LogoSize.Middle} />
                <StyledNav>
                    <StyledCaption>Карта сайта</StyledCaption>
                    <StyledNavList>
                        {Object.values(Menu).map((item) => (<StyledNavLink key={item.name} href={item.link} >{item.name}</StyledNavLink>))}
                    </StyledNavList>
                </StyledNav>
                <StyledContacts>
                    <StyledCaption>Контакты</StyledCaption>
                    <StyledText>
                            ИП Тарханян Г.Ш.
                            ОГРНИП 322774600762101
                            ИНН 772084229151
                    </StyledText>
                </StyledContacts>

            </StyledWrapper>

            <Copyright />
        </StyledFooter>
    )
}
