import React, { Fragment } from "react";
import { 
    Container, 
    Description, 
    Left, 
    Profile, 
    ProfileContact, 
    ProfileDescription, 
    ProfileFormContact, 
    ProfileImg, 
    Right, 
    Thumb
} from "./style";
import TopBanner from "../../Components/TopBanner";
import TextArea from "../../Components/TextArea"
import Button from "../../Components/Button"
import Input from "../../Components/Input"

const Imobi = () => {
    return (
        <Fragment>
            <TopBanner />
            <Container>
                <Left>
                    <Thumb>
                        <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </Thumb>
                    <Description>
                        <h3>Apartamento / Alugar</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo in libero dolorem recusandae expedita unde minus quidem autem debitis aspernatur voluptatibus cupiditate ipsum corrupti, soluta voluptates nobis aliquam! Est, impedit?</p>
                    </Description>
                </Left>
                <Right>
                    <Profile>
                        <ProfileImg>
                           <img src="https://thumbs.dreamstime.com/b/perfil-de-usu%C3%A1rio-do-vetor-avatar-padr%C3%A3o-179376714.jpg" alt="" /> 
                        </ProfileImg>
                        <ProfileDescription>
                            <h3>Jhames damsa</h3>
                            <p>Descrição do usruario</p>
                            <p>test@test.com</p>
                        </ProfileDescription>
                    </Profile>

                    <ProfileContact>
                        <h3>Informações para contato</h3>
                        <p>(11)2651-2516</p>
                        <p>test@test.com</p>
                    </ProfileContact>

                    <ProfileFormContact>
                        <h3>Contate o anunciante</h3>
                        <form>
                            <Input type="text" placeholder="Nome:"/>
                            <Input type="text" placeholder="E-mail:"/>
                            <TextArea placeholder="Mensagem:"/>
                            <Button>Enviar mensagem</Button>
                        </form>
                    </ProfileFormContact>

                </Right>
            </Container>

        </Fragment>
    )
}

export default Imobi;