import { useLayoutEffect, useRef, useState } from 'react';
import * as S from './style';
import { SizeDevice } from '../../styles/device-query';

export default function AboutMe(): JSX.Element {
    const [aboutHeight, setAboutHeight] = useState('')
    const aboutRef = useRef<HTMLElement>(null);
    useLayoutEffect(() => {
        setAboutHeight(aboutRef.current?.scrollHeight + 'px');
    }, [aboutRef])

    const img = () => {
        console.log(window.innerWidth)
        if(window.innerWidth >= SizeDevice.mobile && window.innerWidth < SizeDevice.tablet) {
            return <S.Img src={'./img/about_emillie-mobile.jpg'} alt={'Эмилия'} width={268} height={328} />
        } 
        else if(window.innerWidth >= SizeDevice.tablet && window.innerWidth < SizeDevice.desktop) {
            return <S.Img src={'./img/about_emillie-tablet.jpg'} alt={'Эмилия'} width={679} height={858} />
        }
        else if(window.innerWidth >= SizeDevice.desktop) {
            return <S.Img src={'./img/about_emillie-desktop.jpg'} alt={'Эмилия'} width={734} height={948} />
        }
    }

    return (
        <S.About ref={aboutRef} id={'about'} $height={aboutHeight}>
            {img()}
            <S.Description>
                <S.Wrapper>
                    <S.Title as={'h3'}>Salut, <br />Je suis Emilie</S.Title>
                    <S.Text>Профессионализм, человечность, результат - три слова, которые описывают мой подход в обучении.</S.Text>
                    <S.Text>У меня педагогическое образование, я учитель французского и английского языков, У меня диплом из высшей школы экономики, также недавно сдала dalf c2 это самый высокий уровень владения языком. Мой опыт работы ....лет.</S.Text>
                    <S.Text> Я люблю организовывать вокруг себя людей, Для меня главное создать комфортную и безопасную атмосферу в группе, дать безоценочную обратную связь, а также оцениваю работу, а не личность человека. Мы много смеемся на уроках и становимся почти друзьями. Для меня важно, чтобы человек видел свой результат и радовался. </S.Text>
                </S.Wrapper>
            </S.Description>
        </S.About>
    );
}
