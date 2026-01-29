import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Description, Img, Itens } from './styled';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';


const Card = () => {
    return (
        <Container>
            <Img>
                <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Img>
            <Description>
                <h4>Apartamento</h4>
                <Itens>
                    <span><FaMapMarkerAlt />Idependencia, Cachoeiro</span>
                    <span>2.400,00 / mês</span>
                    <Link to='/imovel'>Detalhes<FaArrowRight /></Link>
                </Itens>
            </Description>
        </Container>
    );
};

export default Card;