import * as S from './style';

export default function Compare(): JSX.Element {
    return (
        <S.Wrapper>
            <S.Title>не знаете какой тариф выбрать?</S.Title>
            <S.Text>мы сделали для вас сравнительную табличку</S.Text>
            <S.Table>
                <S.TableWrapper>
                    <S.Row>
                        <S.TableTitle>Индивидуально</S.TableTitle>
                        <S.TableTitle>В группе</S.TableTitle>
                    </S.Row>
                    <S.Row>
                        <S.TableText>стоимость выше</S.TableText>
                        <S.TableText>стоимость ниже</S.TableText>
                    </S.Row>
                    <S.Row>
                        <S.TableText>можно выбрать индивидуальный график занятий его легче корректировать</S.TableText>
                        <S.TableText>нужно согласовывать график занятий с группой, который нельзя корректировать</S.TableText>
                    </S.Row>
                    <S.Row>
                        <S.TableText>преподаватель работает по моему запросу и на моем уровне владения языка</S.TableText>
                        <S.TableText>преподаватель идет по общей программе и ориентируется на средний уровень группы</S.TableText>
                    </S.Row>
                    <S.Row>
                        <S.TableText>отсутствие конкуренции 100% внимание преподавателя направленно на Вас</S.TableText>
                        <S.TableText>конкуренция  в группе как мотивация</S.TableText>
                    </S.Row>
                    <S.Row>
                        <S.TableText>живое общение с преподавателем</S.TableText>
                        <S.TableText>живое общение с несколькими людьми</S.TableText>
                    </S.Row>
                </S.TableWrapper>
            </S.Table>
        </S.Wrapper>
    )
}
