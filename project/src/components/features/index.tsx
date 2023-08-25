import * as S from './style';

export default function Features ():JSX.Element {
    return (
        <S.Features>
            <S.Title>почему выбирают нашу школу?</S.Title>
            <S.Icons>
                <S.Icon>
                    <S.IconImg src={'./img/features_computer.svg'} alt={'Образовательная платформа'} width={92} height={93}/>
                    <S.IconCaption>Образовательная платформа</S.IconCaption>
                </S.Icon>
                <S.Icon>
                    <S.IconImg src={'./img/features_student.svg'} alt={'Квалифицированные преподаватели'} width={92} height={93}/>
                    <S.IconCaption>Квалифицированные преподаватели</S.IconCaption>
                </S.Icon>
                <S.Icon>
                    <S.IconImg src={'./img/features_achievement.svg'} alt={'Аутентичные материалы'} width={92} height={93}/>
                    <S.IconCaption>Аутентичные материалы</S.IconCaption>
                </S.Icon>
            </S.Icons>
        </S.Features>
    )
}
