import * as S from './style';
import { baseTheme } from '../../styles/theme';

export default function Callback({question}: {question?: boolean}):JSX.Element {
    if (question) {
        return (
            <S.Form name={'callback'} method={"post"} action={'api/callback'}>
                <S.Title as={'h3'}>Остались вопросы?</S.Title>
                <S.Text $weight={600} $color={baseTheme.colors.khaki}>Если не найдете свой вопрос в списке - обязательно свяжитесь с нами</S.Text>
                <S.WrappersInput>
                    <S.Input name={'name'} type={'text'} placeholder={'Имя'} />
                    <S.Input name={'tel'} type={'text'} placeholder={'Телефон'} />
                    <S.Input name={'email'} type={'email'} placeholder={'Email'} />
                </S.WrappersInput>
                <S.Text $weight={400}>Или напишите нам в <S.MailLink href={'mailto:bonjour@frenchwithemilie.ru'}>Cлужбу поддержки</S.MailLink>. Мы свяжемся с вами в течение 30 минут с 10:00 до 20:00 (мск)</S.Text>
                <S.button>Отправить</S.button>
            </S.Form>
        )
    }
    return (
        <S.Form name={'callback'} method={"post"} action={'api/callback'}>
            <S.Title as={'h3'}>Хотите получить пробный урок? <S.UpperOrangeText>суперцена</S.UpperOrangeText> всего 500руб.</S.Title>
            <S.Text $weight={600} $color={baseTheme.colors.khaki}>Оставьте заявку и мы свяжемся с вами.</S.Text>
            <S.WrappersInput>
                <S.Input name={'name'} type={'text'} placeholder={'Имя'} />
                <S.Input name={'tel'} type={'text'} placeholder={'Телефон'} />
                <S.Input name={'email'} type={'email'} placeholder={'Email'} />
            </S.WrappersInput>
            <S.Text $weight={400}>Или напишите нам в <S.MailLink href={'mailto:bonjour@frenchwithemilie.ru'}>Cлужбу поддержки</S.MailLink>. Мы свяжемся с вами в течение 30 минут с 10:00 до 20:00 (мск)</S.Text>
            <S.button>Отправить</S.button>
        </S.Form>
    )
}
