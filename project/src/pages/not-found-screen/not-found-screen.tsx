import React from 'react'
import Title from '../../components/title/title'
import Main from '../../components/main/main'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

export default function NotFoundScreen(): JSX.Element {
    return (
        <React.Fragment>
        <Header background={false}/>
        <Main>
            <Title as={'h1'}>404 - Страница не найдена</Title>
         </Main>
        <Footer />
    </React.Fragment>
    )
}
