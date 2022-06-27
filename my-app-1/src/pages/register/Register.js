import { useNavigate, Outlet } from 'react-router-dom'
import {MyForm, MyH2, MyInput, MyButton } from '../registerStyle';



const Register = ({setIsRegister}) => {

    const navigate = useNavigate();

    const handlerSubmit = (e)=>{
        e.preventDefault();
        setIsRegister(true);
        navigate("/login");
        
    } 

    return (
        <>
            <Outlet/>
            <MyForm onSubmit={handlerSubmit}>
                <MyH2> Registro </MyH2>
                <MyInput placeholder='name'/>
                <MyInput placeholder='email'/>
                <MyInput placeholder='password'/>
                <MyButton>Sing up</MyButton>
            </MyForm>
        </>
    )
   
}

export default Register