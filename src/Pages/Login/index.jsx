import React from "react";
import Input from "../../Components/Input"
import Button from "../../Components/Button"
import { Container, ContainerForm, Form, Label, Links } from "./style";
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <Container>
            <h2>Acesse sua conta</h2>
            <p>Entre com seu e-mail e senha!</p>
            <ContainerForm>
                <Form>
                    <Label>E-mail</Label>
                    <Input type="text" placeholder="Digite seu E-mail" />
                    <Label>Senha</Label>
                    <Input type="text" placeholder="Digite sua Senha" />
                    <Button>Entrar</Button>
                    <Links><Link to='/cadastro'>Cadastre-se</Link></Links>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default Login;