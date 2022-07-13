import styled from "styled-components"; 
import Imagem from '../../../img/cadastro.jpg'

export const Container = styled.div`

    *{
        font-family: 'Merienda', cursive;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    background-image: url(${Imagem});
    background-size: 100% 100% ;
    background-repeat: no-repeat;

`

export const Background = styled.div`
    width: 50vw;
    height: 100vh;
    @media (max-width:500px){
        display: none;
    }

`

export const Form = styled.div`
    width: 50vw;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Cards = styled.div`
    width: 60%;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    border-radius: 10px;
    
    background-color: white;

    button{
        width: 100%;
        height: 100%;
        padding: 16px 0px;
        margin: 25px;

    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 60vh;
    }
    a{
        color:#932b2a;
        cursor: pointer;
    }
    h1{
        font-weight: 400;
        font-size: 30px;
        color: #7E0902;
    }

`
export const TextField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;

    input{
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
    }
    label{
        margin-bottom:10px
    }
`

