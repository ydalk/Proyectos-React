import React, {useState} from 'react'
import SingUp from "./SingUp";
import Signin from "./SingIn";
import Home from './Home';
import './Navbar.css'

const Navbar = () => {

    const [view, setView] = useState(<Home />);
    const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "" });

    const handlerUserRegistry = ({ name, email, password }) => {
        setUserInfo({name: name, email:email, password: password})
    }

    const handlerView = (arg) => {
        if (arg === "sign_up") {
            setView(<SingUp userRegistry={handlerUserRegistry}/>)

        } else if (arg === "sign_in") {
            setView(<Signin userInfo={userInfo}/>)
        }
    }

    return (
        <>
            <nav>
                <button onClick={()=> setView(<Home/>)}>Home</button>
                <button onClick={()=> handlerView("sign_up")}>Sign Up</button>
                <button onClick={()=> handlerView("sign_in")}>Sign In</button>
            </nav>
            <div className='body    ' >
                {
                    view
                }
            </div>
        </>
    )
}

export default Navbar