import * as S from './style';

type TitleProps = {
    children: string | JSX.Element | JSX.Element[],
    as?: React.ElementType,
}

export default function Title({children, as = 'h2'}:TitleProps): JSX.Element {
    return (
    <S.Title forwardedAs={as}>
        {children}
    </S.Title>
    )
}
