import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import {MyForm, MyH2, MyInput, MyButton } from '../registerStyle';



const Login = ({setIsLogged, isRegister}) => {

    const navigate = useNavigate();
    const handlerSubmit = (e)=>{
        e.preventDefault();
        setIsLogged(true);
        navigate("/home");
        
    }   

    if(isRegister){
        return(
            <>
                <MyForm onSubmit={handlerSubmit} >
                    <MyH2> Login </MyH2>
                    <MyInput placeholder='email' />
                    <MyInput placeholder='password'/>
                    <MyButton>Ingresar</MyButton>
                </MyForm>
            </>
        ) 
    }else{
        return <Navigate to={"/register/singup"}/>
    }

}

export default Login