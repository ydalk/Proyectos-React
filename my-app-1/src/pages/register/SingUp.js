import { useNavigate, Outlet } from 'react-router-dom'
import {MyForm, MyH2, MyInput, MyButton } from '../registerStyle';



const SingUp = ({setIsRegister}) => {

    const navigate = useNavigate();

    const handlerSubmit = (e)=>{
        e.preventDefault();
        setIsRegister(true);
        navigate("/register/login");
        
    } 

    return (
        <>
           <Outlet />
           <div>
            <MyForm onSubmit={handlerSubmit}>
                <MyH2> Registro </MyH2>
                <MyInput placeholder='name'/>
                <MyInput placeholder='email'/>
                <MyInput placeholder='password'/>
                <MyButton>Sing up</MyButton>
            </MyForm>
           </div>
        </>
    )
   
}

export default SingUp;