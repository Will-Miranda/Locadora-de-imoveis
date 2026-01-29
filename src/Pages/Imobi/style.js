import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 150px;
    display: flex;
    justify-content: space-between;
`

export const Left = styled.div`
    width: 70%;
    padding: 10px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 5px;
`

export const Thumb = styled.div`
    width: 100%;
    img{
        width: 100%;
        height: auto;
        border-radius: 5px;
    }
`

export const Description = styled.div`
    padding: 30px 0;
    h3, p{
        margin-bottom: 15px;
        color: var(--Secundary);
    }
`

export const Right = styled.div`
    width: 28%;
    padding: 10px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 5px;
`

export const Profile = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ProfileImg = styled.div`
    width: 120px;
    img{
        width: 100%;
        height: auto;
        border-radius: 5px;
    }
`

export const ProfileDescription = styled.div`
    h3, p{
        margin-bottom: 15px;
        color: var(--secundary);
    }
`
export const ProfileContact = styled.div`
    h3, p{
        margin-bottom: 15px;
        color: var(--secundary);
    }
`
export const ProfileFormContact = styled.div`
    h3{
        margin-bottom: 15px;
        color: var(--secundary);
    }
    form{
        display: flex;
        flex-direction: column;
    }
    `