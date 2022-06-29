import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Container, MyButton, Wraper } from '../registerStyle';

const Register = () => {

    const navigate = useNavigate();

  return (
    <Wraper>
      <Container>
        <p>¡ Bienvenido !</p>
        <p>Puedes ingresar con tu cuenta.</p>
        <br/>
        <p>Si aún no haces parte del portal, Registrarte.</p>
        <MyButton onClick={()=> navigate("/register/login")}>Ingresar</MyButton>
        <MyButton onClick={()=> navigate("/register/singup")}>Registrarse</MyButton>
        <h6>¿Olvisate tu contraseña?</h6>
      </Container>
      <Outlet/>
    </Wraper>
  )
}

export default Register