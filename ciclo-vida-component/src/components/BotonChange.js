import { useState } from "react";
import CicloClase from "./CicloClase";
import CicloFuncional from "./CicloFuncional";

const BotonChange = () =>{

    const [tipo, setTipo] =useState(true)

    const changeTipo= ()=>{
        return(
        tipo ? (<CicloClase/>) : (<CicloFuncional />)
        
        )    
    }

    return(
        <>
            <button onClick={()=>  setTipo(!tipo)}> Cambiar Componente </button>
            {changeTipo()}
            {
                tipo
            } 
        </>
    )
}

export default BotonChange;