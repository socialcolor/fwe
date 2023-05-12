import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/main";

export default function MainScreen(): JSX.Element {
    useEffect(() => {
        document.title = 'Онлайн Школа Французского. French withe Emillie'
    }, [])
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
    )
}
