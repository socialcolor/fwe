import React, { useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Main from '../../components/main';
import Prices from '../../components/price/prices';
import Callback from '../../components/callback/callback';
import Compare from '../../components/compare/compare';
import Offer from '../../components/offer';
import AboutMe from '../../components/about-me';
import Features from '../../components/features';
import Timeline from '../../components/timeline';
import Platform from '../../components/platform';
import Teachers from '../../components/teachers';
import Reviews from '../../components/reviews';
import Faq from '../../components/faq';

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
                <Features />
                <Timeline />
                <Platform />
                <Prices />
                <Compare />
                <Callback id={'trial'}/>
                <Teachers />
                <Reviews />
                <Faq />
                <Callback question/>
             </Main>
            <Footer />
        </React.Fragment>
    )
}
