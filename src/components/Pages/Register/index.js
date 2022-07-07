import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Background, Container } from './style';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify'
import { baseAPI } from "../../../apis/api";
import { Redirect } from 'react-router-dom';


export const Register = ({authenticated}) => {

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("Email inválido").matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,"Email inválido"),
        password: yup.string().required("Senha obrigatória").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,"Senha obrigatória"),
        confirmPassword: yup.string().oneOf([yup.ref("password")],"Senha não identica")
    })

    const { register,handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(formSchema),

    }) 

    const onRegisterFunction = ({name,email,password,confirmPassword,myTables}) => {
        const user = {name,email,password,confirmPassword,myTables};
        baseAPI
        .post('/register', user )
        .then((_)=>{
            toast.success("Sucesso ao criar a conta");
            return history.push('/login');
        })
        .catch((err) => {toast.error("Erro ao criar a conta")})
    }

    const history = useHistory();

    if(authenticated){
        return <Redirect to='/dashboard'/>
    }

    return (
        <>
        <Background>
        <Container>
            
        <h1> Cadastro </h1>
        <form onSubmit={handleSubmit(onRegisterFunction)}>
        
            <span>Nome</span>
            <input type="text" className="input" {...register("name")}/>
            <p>{errors.name?.message}</p>
            
            <span >Email</span>
                <input type="text" className="input" {...register("email")}/>
               <p>{errors.email?.message}</p>
             
            <span >Senha</span>
                <input type="password" className="input" {...register("password")}/>
                <p>{errors.password?.message}</p>
            
            <span>Confirmação de senha</span>
                <input type="password" className="input" {...register("confirmPassword")}/>
                <p>{errors.confirmPassword?.message}</p>

            <button> Cadastrar </button>
        <button className='link' onClick={() => history.push('/login')}>Já possui cadastro? clique aqui para fazer login</button>
        </form>
        </Container>
        </Background>
        </>
    )
}