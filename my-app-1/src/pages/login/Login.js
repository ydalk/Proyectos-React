import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import styled from 'styled-components';


const MyForm = styled.form `
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 300px;
    padding: 20px;
    border-radius: 10px;
    border: solid 1px #67a6c7;
    box-shadow: 5px 5px 40px 10px #67a6c7;
`
const MyInput = styled.input `
    height: 30px;
    border-radius: 5px;
    margin: 10px;
    border: solid 1px #67a6c7;

`

const MyH2 = styled.h2 `
    color: white;
    text-align: center;
    margin: 20px;
`
const MyButton = styled.button `
    border: solid 1px #67a6c7;
    font-size: 20px;
    width: 50%;
    display: block;
    margin: 10px auto;
    background-color: #3333eb;
    color: white;
    padding: 10px;
    border-radius: 15px;
`

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
        return <Navigate to={"/register"}/>
    }

}

export default Login