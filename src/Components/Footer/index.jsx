import React, { Fragment } from 'react';
import { Container, Copy, Item } from './style';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import LogoImg from "../../assets/logo.png"

const Footer = () => {
    return (
    <Fragment>
                <Container>
            <Item>
                <img src={LogoImg} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <nav>
                    <li><span><FaFacebook size={32}/></span></li>
                    <li><span><FaInstagram size={32}/></span></li>
                    <li><span><FaWhatsapp size={32}/></span></li>
                </nav>
            </Item>
            
            <Item>
                <h3>Outros Serviços</h3>
                <ul>
                    <li><span>Alugar</span></li>
                    <li><span>Divulgar</span></li>
                    <li><span>Suporte</span></li>
                </ul>
            </Item>

            <Item>
                <h3>Links de acesso</h3>
                <ul>
                    <li><span>Alugar</span></li>
                    <li><span>Divulgar</span></li>
                    <li><span>Suporte</span></li>
                </ul>
            </Item>

            <Item>
                <h3>Fale Conosco</h3>
                <ul>
                    <li><span>Alugar</span></li>
                    <li><span>Divulgar</span></li>
                    <li><span>Suporte</span></li>
                </ul>
            </Item>
        </Container>
        <Copy>
            <p>&copy; Copyright 2025 - Workside Tecnologia Todos os Direitos Reservados</p>
            <ul>
                <li><span>Termos de Uso</span></li>
                <li><span>Politica de Privacidade</span></li>
                <li><span>Politica de Cookies</span></li>
            </ul>
        </Copy>
    </Fragment>        
    );
};

export default Footer;