import './App.css';
import CicloClase from './class/CicloClase';
import { useState } from 'react';
import CicloFuncional from './components/CicloFuncional';
//import CicloFuncional from './CicloFuncional';



function App() {

  const [state, setState] = useState();
  
  
  const changeComponent =(tipo)=>{
    
    if(tipo === "calse"){
        setState(<CicloClase />)
    }else if (tipo === "function") {
        setState(<CicloFuncional />)
    } 
  }
  
  return (
    <div className="App">
      <button onClick={()=>changeComponent("calse")}> Componente Clase </button>
      <button onClick={()=>changeComponent("function")}> Componente Funcional </button>
      {
        state
      }     
    </div>
  );
}

export default App;
