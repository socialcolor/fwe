import styled from 'styled-components';
import Copyright from './copyright';
import { Menu } from '../const';
import { DeviceQuery } from '../styles/device-query';

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

    @media ${DeviceQuery.mobile} {
        position: relative;
        padding:0;
        padding-left: 50px;
        padding-right: 73px;
        padding-top: 31px;
        padding-bottom: 14px;
        flex-direction: column;
  }
`
const StyledLogo = styled.div`
    position: absolute;
    right: 37px;
    top: 31px;
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

    @media ${DeviceQuery.mobile} {
        margin: 0;
        font-size: 20px;
        line-height: 24px;
    }
`
const StyledNavList = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    padding: 0;
    margin-top: 34px;

    @media ${DeviceQuery.mobile} {
        margin-top: 18px;
        margin-bottom: 22px;
    }
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

    @media ${DeviceQuery.mobile} {
        font-size: 18px;
        line-height: 22px;
    }
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

    @media ${DeviceQuery.mobile} {
        font-weight: 400;
        font-size: 15px;
        line-height: 27px;
        letter-spacing: 0.002em;
        margin-top: 2px;
    }
`

export default function Footer(): JSX.Element {
    return (
        <StyledFooter>
            <StyledWrapper>
                <StyledLogo>
                    <svg width="83" height="46" viewBox="0 0 83 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.10406 4.8927V3.5752H2.13406V16.3252H3.49406V10.6089H8.38156V9.29145H3.49406V4.8927H9.10406ZM15.1862 7.6552C13.975 7.6552 12.9975 8.18645 12.36 9.03645V7.8252H11.0425V16.3252H12.36V11.7139C12.36 10.1627 13.635 8.9727 15.1862 8.9727C15.4412 8.9727 15.6537 8.99395 15.845 9.0577V7.71895C15.6537 7.67645 15.4412 7.6552 15.1862 7.6552ZM25.7455 11.9902C25.6817 9.54645 23.748 7.6552 21.3255 7.6552C18.8817 7.6552 16.9055 9.63145 16.9055 12.0752C16.9055 14.5189 18.8817 16.4952 21.3255 16.4952C23.3442 16.4952 25.023 15.1564 25.5755 13.3289H24.173C23.7055 14.4339 22.6005 15.1777 21.3255 15.1777C19.6467 15.1777 18.308 13.9027 18.223 12.2664H25.7242L25.7455 11.9902ZM21.3255 8.9727C22.6855 8.9727 23.833 9.84395 24.2367 11.0764H18.393C18.818 9.84395 19.9655 8.9727 21.3255 8.9727ZM31.554 7.6552C30.7678 7.6552 30.0453 7.97395 29.4928 8.5052V7.8252H28.1753V16.3252H29.4928V10.9064C29.4928 9.8227 30.364 8.9727 31.4478 8.9727C32.5315 8.9727 33.3815 9.8227 33.3815 10.9064V16.3252H34.699V10.9064C34.699 9.1002 33.1903 7.6552 31.554 7.6552ZM41.513 16.4952C43.4892 16.4952 45.1467 15.2202 45.7205 13.4352H44.318C43.808 14.4764 42.7455 15.1777 41.513 15.1777C39.7917 15.1777 38.4105 13.8177 38.4105 12.0752C38.4105 10.3327 39.7917 8.9727 41.513 8.9727C42.7455 8.9727 43.808 9.67395 44.318 10.7152H45.7205C45.1467 8.9302 43.4892 7.6552 41.513 7.6552C39.0692 7.6552 37.093 9.63145 37.093 12.0752C37.093 14.5189 39.0692 16.4952 41.513 16.4952ZM51.0403 7.6552C50.339 7.6552 49.6803 7.88895 49.149 8.27145V0.685196H47.8315V16.3252H49.149V10.8852C49.149 9.80145 49.999 8.9727 51.0403 8.9727C52.0815 8.9727 52.9528 9.80145 52.9528 10.8852V16.3252H54.249V10.8852C54.249 9.07895 52.8253 7.6552 51.0403 7.6552Z" fill="#FDDCBF" />
                        <path d="M30.3604 29.1437V27.8262H23.3904V40.5762H30.3604V39.2587H24.7504V34.8599H29.6379V33.5424H24.7504V29.1437H30.3604ZM41.3174 31.9062C40.2974 31.9062 39.4049 32.3949 38.8312 33.1812C38.2574 32.3949 37.3649 31.9062 36.4724 31.9062C35.7074 31.9062 35.0062 32.2887 34.4962 32.8624V32.0762H33.1787V40.5762H34.4962V35.1362C34.4962 34.0737 35.3037 33.2237 36.3449 33.2237C37.3437 33.2237 38.1724 34.0737 38.1724 35.1362V40.5762H39.4899V35.1362C39.4899 34.0737 40.3187 33.2237 41.3174 33.2237C42.3374 33.2237 43.1662 34.0737 43.1662 35.1362V40.5762H44.4837V35.1362C44.4837 33.3512 43.0812 31.9062 41.3174 31.9062ZM48.2848 30.4824C48.7735 30.4824 49.1985 30.0787 49.1985 29.5899C49.1985 29.0587 48.7735 28.6762 48.2848 28.6762C47.7748 28.6762 47.3498 29.0587 47.3498 29.5899C47.3498 30.0787 47.7748 30.4824 48.2848 30.4824ZM47.626 40.5762H48.9435V32.0762H47.626V40.5762ZM52.1875 40.5762H53.505V24.9362H52.1875V40.5762ZM57.4322 30.4824C57.921 30.4824 58.346 30.0787 58.346 29.5899C58.346 29.0587 57.921 28.6762 57.4322 28.6762C56.9222 28.6762 56.4972 29.0587 56.4972 29.5899C56.4972 30.0787 56.9222 30.4824 57.4322 30.4824ZM56.7735 40.5762H58.091V32.0762H56.7735V40.5762ZM69.5799 36.2412C69.5162 33.7974 67.5824 31.9062 65.1599 31.9062C62.7162 31.9062 60.7399 33.8824 60.7399 36.3262C60.7399 38.7699 62.7162 40.7462 65.1599 40.7462C67.1787 40.7462 68.8574 39.4074 69.4099 37.5799H68.0074C67.5399 38.6849 66.4349 39.4287 65.1599 39.4287C63.4812 39.4287 62.1424 38.1537 62.0574 36.5174H69.5587L69.5799 36.2412ZM65.1599 33.2237C66.5199 33.2237 67.6674 34.0949 68.0712 35.3274H62.2274C62.6524 34.0949 63.7999 33.2237 65.1599 33.2237Z" fill="white" />
                        <path d="M31.7364 18.5137C30.4532 19.6685 28.6512 21.6188 27.9854 23.5661" stroke="white" stroke-linecap="round" />
                        <path d="M43.6478 21.5137L42.5878 24.7937L41.4978 21.5137H40.9078L39.8178 24.7737L38.7778 21.5137H38.0778L39.4578 25.5137H40.1378L41.2078 22.3737L42.2678 25.5137H42.9478L44.3178 21.5137H43.6478ZM45.5297 20.7637C45.7597 20.7637 45.9597 20.5737 45.9597 20.3437C45.9597 20.0937 45.7597 19.9137 45.5297 19.9137C45.2897 19.9137 45.0897 20.0937 45.0897 20.3437C45.0897 20.5737 45.2897 20.7637 45.5297 20.7637ZM45.2197 25.5137H45.8397V21.5137H45.2197V25.5137ZM49.2062 22.1137V21.5137H48.1362V19.7737H47.5162V21.5137H46.8462V22.1137H47.5162V24.4637C47.5162 25.0937 48.0462 25.5937 48.6662 25.5937C48.8662 25.5937 49.0862 25.5337 49.1962 25.4637V24.9937H48.7362C48.4162 24.9937 48.1362 24.7537 48.1362 24.3837V22.1137H49.2062ZM51.7747 21.4337C51.4447 21.4337 51.1347 21.5437 50.8847 21.7237V18.1537H50.2647V25.5137H50.8847V22.9537C50.8847 22.4437 51.2847 22.0537 51.7747 22.0537C52.2647 22.0537 52.6747 22.4437 52.6747 22.9537V25.5137H53.2847V22.9537C53.2847 22.1037 52.6147 21.4337 51.7747 21.4337Z" fill="white" fill-opacity="0.51" />
                    </svg>

                </StyledLogo>
                <StyledNav>
                    <StyledCaption>Карта сайта</StyledCaption>
                    <StyledNavList>
                        {Object.values(Menu).map((item) => (<StyledNavLink key={item.name} href={item.link} >{item.name}</StyledNavLink>))}
                    </StyledNavList>
                </StyledNav>
                <StyledContacts>
                    <StyledCaption>Контакты</StyledCaption>
                    <StyledText>ИП Тарханян Г.Ш. <br />
                        ОГРНИП 322774600762101 <br />
                        ИНН 772084229151 <br />
                        Юридический адрес: гор. Москва, Шоссе Энтузиастов 100к1
                    </StyledText>
                </StyledContacts>

            </StyledWrapper>

            <Copyright />
        </StyledFooter>
    )
}
