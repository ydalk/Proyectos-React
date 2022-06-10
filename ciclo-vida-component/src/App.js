import './App.css';
import CicloClase from './components/CicloClase';
import { useState } from 'react';
import CicloFuncional from './components/CicloFuncional';
import BotonChange from './components/BotonChange';



function App() {

  const [state, setState] = useState("calse");
  
  //const changeComponent =(arg)=>{
    
  //   if(arg === "calse"){
  //       setState(<CicloClase 
  //         arg = "Funcional"
  //       />)
  //   }else if (arg === "funcional") {
  //       setState(<CicloFuncional
  //       arg = "clase"
  //       />)
  //   } 
  // }

  
  return (
    <div className="App">
      <BotonChange />
             
    </div>
  );
}

export default App;
