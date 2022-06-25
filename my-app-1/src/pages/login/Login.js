import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

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
                <form onSubmit={handlerSubmit} style={{display:'flex', flexDirection:'column', width: '400px'}}>
                    <input placeholder='email'/>
                    <input placeholder='password'/>
                    <button>Login</button>
                </form>
            </>
        ) 
    }else{
        return <Navigate to={"/register"}/>
    }

}

export default Login