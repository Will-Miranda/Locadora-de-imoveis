import React, { Fragment } from 'react';
import Card from '../../Components/Card';
import { Header, Wrapper } from './style';
import Banner from "../../Components/Banner";

const Home = () => {
    let Cards = [];
    for (let i = 0; i<4; i++) {
        Cards.push(<Card key={i} />)
    }

    return (
        <Fragment>
            <Banner />
            <Header>
                <h2>Encontre o imóvel dos seus sonhos!</h2>
            </Header>
            <Wrapper>
                {Cards}
            </Wrapper>
        </Fragment>
    );
};

export default Home;