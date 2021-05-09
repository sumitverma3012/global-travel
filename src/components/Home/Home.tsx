import React from 'react';
import '../../App.css';
import TrailerView from "../TrailerView/TrailerView";
import Cards from "../Card/Cards";
import Footer from "../Footer/Footer";

const Home = () => {
    return(
        <>
            <TrailerView />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;