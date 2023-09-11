import * as S from './style'
import { FaqList } from '../../const';
import { useRef, useState } from 'react';

function Accrodion({question, answer}:{question: string, answer: string}):JSX.Element {
    const [state, setState] = useState(0); 
    const QuestionRef = useRef<HTMLLIElement>(null); 
    const clickHandler = () => {
        if(QuestionRef.current) {
            const Height:number = QuestionRef.current?.scrollHeight;
            state ? setState(0) : setState(Height);
        }
    }

    return (
    <S.Question ref={QuestionRef}>
        <S.wrapper onClick={clickHandler}>
            <S.Caption>{question}</S.Caption>
            <S.Icon>{state ? '-' : '+'}</S.Icon>
        </S.wrapper>
        <S.Answer $height={state}>{answer}</S.Answer>
    </S.Question>
    )
}

export default function Faq(): JSX.Element {
    return (
        <S.Faq id={'faq'}>
            <S.Title as={'h3'}>часто задаваемые вопросы</S.Title>
            <S.Text>Если не найдете свой вопрос в списке - обязательно свяжитесь с нами</S.Text>
            <S.Questions>
                {FaqList.map(({question, answer}) => (<Accrodion key={question} question={question} answer={answer}/>))}
            </S.Questions>
        </S.Faq>
    )
}
