
import styled from "styled-components"; 

export const Background = styled.div`
    background-image: src('../../../img/cadastro.jpg');
`

export const Container = styled.div`

    *{
        font-family: 'Merienda', cursive;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    min-height: 100vh;
    padding: clamp(35px, 8%, 70px);
    

    h1{
        color: #7E0902;
    }

    form{
        display: flex;
        flex-direction: column;
    }

    input{
    width: 100%;
    font-size: 0.9em;
    padding: 25px 10px 10px;
    font-weight: 600;

    background-color: #D3CDC0;
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 5px;
    outline: none;
    color: var(--deep-grey);
    }

    button{
    width: 100%;
    height: 100%;
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #932B2A;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    margin-bottom: 60px;
    color: #D3CDC0;
    font-size: 20px;
    }

    p{
        color:  #932B2A;
    }
    .link{
        border: none;
        background-color:white;
        color: black;
    }
`
