import * as S from './style';
import { FormEvent } from 'react';
import { baseTheme } from '../../styles/theme';

export default function Callback({ question, price, id }: { question?: boolean, price?: boolean, id?: string }): JSX.Element {
    const onFormSend = (evt: FormEvent<HTMLFormElement>): void => {
        evt.preventDefault();

    };

    if (question) {
        return (
            <S.Form name={'callback'} method={"post"} action={'api/callback'} onSubmit={onFormSend}>
                <S.Title as={'h3'}>Остались вопросы?</S.Title>
                <S.Text>Если не найдете свой вопрос в списке - обязательно свяжитесь с нами</S.Text>
                <S.WrappersInput>
                    <S.Input required name={'name'} type={'text'} placeholder={'Имя*'} />
                    <S.Input required name={'tel'} type={'text'} placeholder={'Телефон*'} />
                    <S.Input required  name={'email'} type={'email'} placeholder={'Email*'} />
                </S.WrappersInput>
                <S.Signature>Или напишите нам в <S.MailLink href={'mailto:bonjour@frenchwithemilie.ru'}>службу поддержки</S.MailLink>. <br /> Мы свяжемся с вами в течение 30 минут с 10:00 до 20:00 (мск)</S.Signature>
                <S.button $color={baseTheme.colors.khaki}>Отправить</S.button>
            </S.Form>
        )
    }

    if (price) {
        return (
            <S.Form name={'callback'} method={"post"} action={'api/callback'} onSubmit={onFormSend}>
                <S.Title as={'h3'}>Запишитесь на пробный урок по <S.UpperOrangeText>суперцене</S.UpperOrangeText> всего 500руб.</S.Title>
                <S.WrappersInput>
                    <S.Input required name={'name'} type={'text'} placeholder={'Имя*'} />
                    <S.Input required name={'tel'} type={'text'} placeholder={'Телефон*'} />
                    <S.Input required name={'email'} type={'email'} placeholder={'Email*'} />
                </S.WrappersInput>
                <S.Signature>Или напишите нам в <S.MailLink href={'mailto:bonjour@frenchwithemilie.ru'}>службу поддержки</S.MailLink>. <br /> Мы свяжемся с вами в течение 30 минут с 10:00 до 20:00 (мск)</S.Signature>
                <S.button $color={baseTheme.colors.khaki}>Отправить</S.button>
            </S.Form>
        )
    }

    return (
        <S.Form id={id} name={'trian'} method={"post"} action={'api/callback'} onSubmit={onFormSend}>
            <S.Title as={'h3'}>Хотите получить пробный урок? <S.UpperOrangeText>суперцена</S.UpperOrangeText> всего 500руб.</S.Title>
            <S.Text>Оставьте заявку и мы свяжемся с вами.</S.Text>
            <S.WrappersInput>
                <S.Input required name={'name'} type={'text'} placeholder={'Имя*'} />
                <S.Input required name={'tel'} type={'text'} placeholder={'Телефон*'} />
                <S.Input required name={'email'} type={'email'} placeholder={'Email*'} />
            </S.WrappersInput>
            <S.Signature>Или напишите нам в <S.MailLink href={'mailto:bonjour@frenchwithemilie.ru'}>службу поддержки</S.MailLink>. <br /> Мы свяжемся с вами в течение 30 минут с 10:00 до 20:00 (мск)</S.Signature>
            <S.button $color={baseTheme.colors.yellowLight}>Отправить</S.button>
        </S.Form>
    )
}
