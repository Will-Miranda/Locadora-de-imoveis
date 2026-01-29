import React from "react";
import Input from "../../Components/Input"
import Button from "../../Components/Button"
import { Container, ContainerForm, Form, Label } from "./style";

const Cadastro = () =>{
    return(
        <Container>
            <h2>Crie sua conta</h2>
            <p>Cadastre-se para acessar a plataforma!</p>
            <ContainerForm>
                <Form>
                    <Label>Nome</Label>
                    <Input type="text" placeholder="Digite seu Nome" />
                    <Label>E-mail</Label>
                    <Input type="text" placeholder="Digite seu E-mail" />
                    <Label>Senha</Label>
                    <Input type="text" placeholder="Digite sua Senha" />
                    <Label>Confirmar Senha</Label>
                    <Input type="text" placeholder="Digite sua Senha Novamente" />
                    <Button>Cadastrar</Button>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default Cadastro;