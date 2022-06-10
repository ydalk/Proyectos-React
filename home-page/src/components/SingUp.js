import React, {useState} from 'react'

const SingUp = ({ userRegistry }) => {

  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSent, setIsSent] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault(); //prevenimos que la pagina se recargue
    setIsSent(true);
    let value = {
      name,
      email,
      password
    };
    userRegistry(value);
    e.target.reset()
  }

  return (
    <form onSubmit={(e)=>onSubmitHandler(e)}>
          <input
              placeholder='Name'
              type="text"
              onChange={(e)=> setName(e.target.value)}
          />
          <input
              placeholder='Email'
              type="email"
              onChange={(e)=> setEmail(e.target.value)}
          />
          <input 
              placeholder='Password' 
              type="password"
              onChange={(e)=> setPassword(e.target.value)}
          />
          <button type="submit">{isSent ? "info Submitted" : "Send"}</button>
    </form>
  )
}

export default SingUp