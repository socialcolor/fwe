import * as S from './style';

type TitleProps = {
    children: string | JSX.Element | JSX.Element[],
    as?: React.ElementType,
    style?: {
        [key: string]: string;
    }
}

export default function Title({children, as = 'h2', style}:TitleProps): JSX.Element {
    return (
    <S.Title as={as} style={style}>
        {children}
    </S.Title>
    )
}
