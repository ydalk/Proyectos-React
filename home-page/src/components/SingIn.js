import React, {useState} from 'react'
import './Sing.css'

const SingIn = ({ userInfo }) => {

  const [signIn, setSignIn] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (signIn.email === userInfo.email && signIn.password === userInfo.password) {
      setShow(true);
    }
  }

  return (
    <>
        {
        show ?
          <div>
            <h1>Usuario Registrado</h1>
          </div>
          :
          <form onSubmit={(e)=> onSubmitHandler(e)}>
            <input
              placeholder='email'
              type="email"
              onChange={(e)=> setSignIn({...signIn, email: e.target.value})}
            />
            <input
              placeholder='password'
              type="password"
              onChange={(e)=> setSignIn({...signIn, password: e.target.value})}
            />
                <button className="btn" type="submit">Send</button>
          </form>
        } 
    </>
  )
}

export default SingIn