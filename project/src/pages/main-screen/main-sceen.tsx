import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Main from '../../components/main/main';
import Prices from '../../components/price/prices';
import Callback from '../../components/callback/callback';
import Compare from '../../components/compare/compare';
import Offer from '../../components/offer/offer';
import AboutMe from '../../components/about-me';

export default function MainScreen(): JSX.Element {
    useEffect(() => {
        document.title = 'Онлайн Школа Французского. French withe Emillie'
    }, [])

    return (
        <React.Fragment>
            <Header />
            <Main>
                <Offer />
                <AboutMe />
                <Prices />
                <Compare />
                <Callback />
             </Main>
            <Footer />
        </React.Fragment>
    )
}
