import { useRef, useState } from 'react';
import Title from '../title';
import * as S from './styled';

export default function Offer(): JSX.Element {
    const textRef = useRef<HTMLParagraphElement>(null);
    const [height, setHeight] = useState(0);

    const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!height && textRef.current) {
            setHeight(textRef.current.scrollHeight)
        } else {
            setHeight(0)
        }
    };

    return (
        <S.Offer>
            <Title as={'h3'}>Если изучение языка для вас </Title>
            <S.Cilres>
                <S.Circle>
                    <S.Img src={'./img/offer-img-1.jpg'} />
                    <S.Caption>Кажется скучным</S.Caption>
                </S.Circle>
                <S.Circle>
                    <S.Img src={'./img/offer-img-2.jpg'} />
                    <S.Caption>Не приносит результат</S.Caption>
                </S.Circle>
                <S.Circle>
                    <S.Img src={'./img/offer-img-3.jpg'} />
                    <S.Caption>занимает много времени </S.Caption>
                </S.Circle>
            </S.Cilres>
            <S.Description>
                <S.Wrapper>
                <S.DescriptTitle as={'p'}>поздравляем!<br /> вы пришли по адресу:</S.DescriptTitle>
                <S.Text>Уникальность нашей методики заключается в использовании интерактивной образовательной платформы.<br />
                    На пробном занятии вы проходите тестирование, на котором определяется ваш уровень языка, а также получаете подробную обратную связь от преподавателя с рекомендациями по формату, длительности и уровню.
                </S.Text>
                <S.MoreText ref={textRef} $height={height}>
                    <S.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque inventore consequuntur, a quis libero modi consequatur minus aspernatur possimus, totam accusamus quos provident maiores. Nisi tenetur molestias consectetur quam?</S.Text> 
                </S.MoreText>
                <S.MoreButton onClick={onClickButton} $show={height}>{height ? 'Свернуть' : 'Узнать подробнее'}</S.MoreButton>
                </S.Wrapper>
            </S.Description>
            <S.Achievements>
                <S.AchievementsItem>
                    <S.AchievementsNumber>4000</S.AchievementsNumber>
                    <S.AchievementsName>Довольных студентов</S.AchievementsName>
                </S.AchievementsItem>
                <S.AchievementsItem>
                    <S.AchievementsNumber>10</S.AchievementsNumber>
                    <S.AchievementsName>Лет опыта</S.AchievementsName>
                </S.AchievementsItem>
                <S.AchievementsItem>
                    <S.AchievementsNumber>3000</S.AchievementsNumber>
                    <S.AchievementsName>Успешно сдали экзамен</S.AchievementsName>
                </S.AchievementsItem>
            </S.Achievements>
        </S.Offer>
    )
}
