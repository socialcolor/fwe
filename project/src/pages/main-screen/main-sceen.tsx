import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";
import Prices from "../../components/price/prices";

export default function MainScreen(): JSX.Element {
    useEffect(() => {
        document.title = 'Онлайн Школа Французского. French withe Emillie'
    }, [])
    return (
        <React.Fragment>
            <Header />
            <Main>
                <Prices />
             </Main>
            <Footer />
        </React.Fragment>
    )
}
