import * as S from './style';
import { FormEvent, useState } from 'react';
import { baseTheme } from '../../styles/theme';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendForm } from '../../store/asyncActions';
import { getSuccesSendForm } from '../../store/selectors';

export default function Callback({ question, price, id, name }: { question?: boolean, price?: boolean, id?: string, name: string }): JSX.Element {
    const [succesSend, setSuccesSend] = useState(false);
    const [formState, setFormState] = useState({
        formName: name,
        name: '',
        phone: '',
        email: '',
    });

    const dispatch = useAppDispatch();
    const successSendForm = useAppSelector(getSuccesSendForm());
    
    const onFormSend = (evt: FormEvent<HTMLFormElement>): void => {
        evt.preventDefault();
        dispatch(sendForm(formState));
        setSuccesSend(successSendForm);
    };

    return (
        <S.Form id={id} name={name} method={"post"} action={'api/callback'} onSubmit={onFormSend}>
            {question &&
                <>
                    <S.Title as={'h3'}>Остались вопросы?</S.Title>
                    <S.Text>Если не найдете свой вопрос в списке - обязательно свяжитесь с нами</S.Text>
                </>
            }
            {price && <S.Title as={'h3'}>Запишитесь на пробный урок по <S.UpperOrangeText>суперцене</S.UpperOrangeText> всего 500руб.</S.Title>}
            {!question && !price &&
                <>
                    <S.Title as={'h3'}>Хотите получить пробный урок? <S.UpperOrangeText>суперцена</S.UpperOrangeText> всего 500руб.</S.Title>
                    <S.Text>Оставьте заявку и мы свяжемся с вами.</S.Text>
                </>
            }
            <S.WrappersInput>
                <S.Input required name={'name'} type={'text'} placeholder={'Имя*'} onInput={(evt) => setFormState({ ...formState, name: evt.currentTarget.value })} />
                <S.Input required name={'tel'} type={'text'} placeholder={'Телефон*'} onInput={(evt) => setFormState({ ...formState, phone: evt.currentTarget.value })} />
                <S.Input required name={'email'} type={'email'} placeholder={'Email*'} onInput={(evt) => setFormState({ ...formState, email: evt.currentTarget.value })} />
            </S.WrappersInput>
            <S.Signature>Или напишите нам в <S.MailLink href={'mailto:bonjour@frenchwithemilie.ru'}>службу поддержки</S.MailLink>. <br /> Мы свяжемся с вами в течение 30 минут с 10:00 до 20:00 (мск)</S.Signature>
            {succesSend ? <S.Text>Заявка успешно отправлена. С вами свяжуться в ближайшее время</S.Text> : <S.button $color={question || price ? baseTheme.colors.khaki : baseTheme.colors.yellowLight}>Отправить</S.button>}
        </S.Form>
    )
}
