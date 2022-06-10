import { Component} from "react";
import Card from "./Card";

class CicloClase extends Component{
    
    constructor(){
        super()
        this.state = {
            data: {},
            id : 1
        };
    }

    //
    // request = async() => {
    //     const response = await fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
    //     const result = await response.json();
    //     //asignamos el result a la variable data definida en el State
    //     this.setState({ data: result})    
    // }

   //componentDidMount() es un método que arroja true/false
   //sirve para declarar lógica que queremos que 
   //se ejecute en el momento que el compnente se cargue por primera vez
    // componentDidMount(){
    //     this.request();
    // }

    //componentDidUpdate() es un método que arroja true/false
    //se encarga de que se ejecute una lógica en cada actualización que se haga
    //permite dos parametos a través de los que se va a ctualizar si cambia una o la otra
    //valido si el valor id  es igual al prevState para realizar la renderización si es diferente
    // componentDidUpdate(prevProps, prevState){
    //     if(prevState.id !== this.state.id){
    //         this.request()
    //     }
    // }

    render(){
        return(
            <>
                <h2>Componente de Clases</h2>
                <Card />
            </>
        )
    }
}

export default CicloClase;