import Copyright from '../copyright/copyright';
import { MenuFooter } from '../../const';
import * as S from './style';

export default function Footer(): JSX.Element {
    return (
        <S.Footer>
            <S.Wrapper>
                <S.Logo />
                <S.Nav>
                    <S.Caption>Карта сайта</S.Caption>
                    <S.NavList>
                        {Object.values(MenuFooter).map((item) => (<S.NavLink key={item.name} href={item.link} >{item.name}</S.NavLink>))}
                    </S.NavList>
                </S.Nav>
                <S.Contacts>
                    <S.ContactsCaption>Контакты</S.ContactsCaption>
                    <S.Text>ИП Тарханян Г.Ш.</S.Text>
                    <S.Text>ОГРНИП 322774600762101</S.Text>
                    <S.Text>ИНН 772084229151</S.Text>
                    <S.Text>Юридический адрес: гор. Москва, Шоссе Энтузиастов 100к1</S.Text>
                </S.Contacts>
            </S.Wrapper>
            <Copyright />
        </S.Footer>
    )
}
