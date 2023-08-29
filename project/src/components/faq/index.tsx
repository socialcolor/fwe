import * as S from './style'
import Title from '../title/title';
import { FaqList } from '../../const';
import { useState } from 'react';

export default function Faq(): JSX.Element {
    return (
        <S.Faq id={'faq'}>
            <Title as={'h3'}>часто задаваемые вопросы</Title>
            <S.Text>Если не найдете свой вопрос в списке - обязательно свяжитесь с нами</S.Text>
            <S.Questions>
                {FaqList.map(({question, answer}) => (<Accrodion key={question} question={question} answer={answer}/>))}
            </S.Questions>
        </S.Faq>
    )
}

function Accrodion({question, answer}:{question: string, answer: string}):JSX.Element {
    const [state, setState] = useState(0);
 
    return (
    <S.Question onClick={(evt) => {
        if(state) {
            setState(0)
        } else {
            setState(evt.currentTarget.scrollHeight)
        }
    }}>
        <S.wrapper>
            <S.Caption>{question}</S.Caption>
            <S.Icon>{state ? '-' : '+'}</S.Icon>
        </S.wrapper>
        <S.Answer $height={state}>{answer}</S.Answer>
    </S.Question>
    )
}
