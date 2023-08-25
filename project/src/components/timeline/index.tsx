import * as S from './style';

export default function Timeline():JSX.Element {
    return(
        <S.Timeline>
            <S.Title>Как выглядит процесс обучения</S.Title>
            <S.TimelineBox>
                <S.TimelineColumnLeft>
                    <S.Rectangle>начало курса</S.Rectangle>
                    <S.Circle>1 месяц</S.Circle>
                    <S.Circle>2 месяц</S.Circle>
                    <S.Circle>3 месяц</S.Circle>
                    <S.Circle>4 месяц</S.Circle>
                    <S.Rectangle>окончание курса</S.Rectangle>
                    <S.Line src={'./img/timeline_line.svg'}/>
                </S.TimelineColumnLeft>
                <S.TimelineColumnRight>
                    <S.MiddleText>предыдущий опыт обучения</S.MiddleText>
                    <S.UpperText>вы получаете первую ступень за <S.OrangeText>32</S.OrangeText> урока</S.UpperText>
                    <S.MiddleText>переход на следующую ступень</S.MiddleText>
                </S.TimelineColumnRight>
            </S.TimelineBox>
        </S.Timeline>
    )
}
