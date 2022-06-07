
const Navbar =({ChangeState})=>{
    return(
        <nav>
            <button onClick={()=>ChangeState(1)}>Pokemon Rock</button>
            <button onClick={()=>ChangeState(2)}>Pokemon Water</button>
            <button onClick={()=>ChangeState(3)}>Pokemon Fire</button>
            <button onClick={()=>ChangeState(4)}>Pokemon Electric</button>
        </nav>
    )
}

export default Navbar;