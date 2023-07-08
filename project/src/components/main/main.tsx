import * as S from './style';

  export default function Main({children}:{children?: React.ReactNode}): JSX.Element {
  return (
    <S.Main>
      {children}
    </S.Main>
  )
}
