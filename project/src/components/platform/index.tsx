import * as S from './style';

export default function Platform(): JSX.Element {
    return (
        <S.Platform>
            <S.Wrapper>
                <S.Title>Занятия на нашей платформе проходят не только интересно, но еще и удобно </S.Title>
                <S.Cirle><S.CircleText>Ваши домашние задания в электронном варианте</S.CircleText></S.Cirle>
                <S.PlatformIndexImg />
                <S.EllipseRight><S.EllipseText>Вы видите структуру урока</S.EllipseText></S.EllipseRight>
                <S.EllipseLeft><S.EllipseText>Вы управляете вашим расписание</S.EllipseText></S.EllipseLeft>
                <S.PlatformScheduleImg />
            </S.Wrapper>
        </S.Platform>
    )
}

