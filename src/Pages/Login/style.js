import styled from "styled-components";

export const Container = styled.div`
    padding: 100px 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        font-size: 1.875rem;
    }
    p{
        font-size: 1.2rem;
        margin-bottom: 15px;
    }
`

export const ContainerForm = styled.div`
    padding: 35px;
    width: 370px;
    background-color: var(--white); 
`

export const Form = styled.div`
width: 100%;
`

export const Label = styled.div`
    display: flex;
    margin-bottom: 10px;
    font-weight: 500;
`

export const Links = styled.div`
    width: 100%;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    line-height: 24px;
    border: 0;
    color: var(--white);
    font: 0.875rem;
    font-weight: 600;
    transition: 0.3s;
    padding: 12px 20px;
    margin-top: 15px;
`
