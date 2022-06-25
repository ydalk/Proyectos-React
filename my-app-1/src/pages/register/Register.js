import { useNavigate } from 'react-router-dom'

const Register = ({setIsRegister}) => {

    const navigate = useNavigate();

    const handlerSubmit = (e)=>{
        e.preventDefault();
        setIsRegister(true);
        navigate("/login");
        
    } 

    return (
        <form onSubmit={handlerSubmit} style={{display:'flex', flexDirection:'column', width: '400px'}}>
            <input placeholder='name'/>
            <input placeholder='email'/>
            <input placeholder='password'/>
            <button>Sing up</button>
        </form>
    )
   
}

export default Register