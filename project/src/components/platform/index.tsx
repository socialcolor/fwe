import * as S from './style';

export default function Platform():JSX.Element {
    return(
        <S.Platform>
            <S.Title>Занятия на нашей платформе проходят не только интересно, но еще и удобно </S.Title>
            <S.Cirle><S.CircleText>Ваши домашние задания в электронном варианте</S.CircleText></S.Cirle>
            <S.PlatformIndexImg src={'./img/platform_index.jpg'} width={307} height={360}/>
            <S.EllipseRight><S.EllipseText>Вы видите структуру урока</S.EllipseText></S.EllipseRight>
            <S.EllipseLeft><S.EllipseText>Вы управляете вашим расписание</S.EllipseText></S.EllipseLeft>
            <S.PlatformScheduleImg src={'./img/platform_schedule.jpg'} width={307} height={180}/>
        </S.Platform>
    )
}

