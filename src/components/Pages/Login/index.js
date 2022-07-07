import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Container } from './style';
import { baseAPI } from "../../../apis/api";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify'
import { Redirect } from 'react-router-dom';

export const Login = ({authenticated, setAuthenticated}) => {

    const history = useHistory();

    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("Email inválido").matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,"Email inválido"),
        password: yup.string().required("Senha obrigatória").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,"Senha obrigatória"),
    })

    const { register,handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(formSchema),

    }) 

    const onLoginFunction = (data) => {
        baseAPI.post('/login', data )
        .then((response)=>{
            console.log(response)
            const { token } = response.data;
            localStorage.setItem('@projetofinal:token', JSON.stringify(token));

            setAuthenticated(true)
            return history.push('/dashboard');
        })
        .catch((err)=>toast.error('Email ou senha inválidos'))
    }
    if(authenticated){
        return <Redirect to='/dashboard'/>
    }
    return (
        <>
        <Container>
            
        <h1> Login </h1>
        <form onSubmit={handleSubmit(onLoginFunction)}>            

            <span >Email</span>
                <input type="text" className="input" {...register("email")}/>
               <p>{errors.email?.message}</p>
            
            <span >Senha</span>
                <input type="password" className="input" {...register("password")}/>
                <p>{errors.password?.message}</p>

            <button>Entrar</button>
        
        <button className='link' onClick={() => history.push('/register')}>Ainda não possui cadastro? Clique aqui</button>
       
        </form>
        </Container>
        </>
    )
}