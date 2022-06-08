import { Component} from "react";

class CicloClase extends Component{
    
    constructor(){
        super()
        this.state = {
            data: {},
            id : 1
        };
    }

    //
    request = async() => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
        const result = await response.json();
        //asignamos el result a la variable data definida en el State
        this.setState({ data: result})    
    }

   //componentDidMount() es un método que arroja true/false
   //sirve para declarar lógica que queremos que 
   //se ejecute en el momento que el compnente se cargue por primera vez
    componentDidMount(){
        this.request();
    }

    //componentDidUpdate() es un método que arroja true/false
    //se encarga de que se ejecute una lógica en cada actualización que se haga
    //permite dos parametos a través de los que se va a ctualizar si cambia una o la otra
    //valido si el valor id  es igual al prevState para realizar la renderización si es diferente
    componentDidUpdate(prevProps, prevState){
        if(prevState.id !== this.state.id){
            this.request()
        }
    }

    ChangeId = ( action ) =>{
        if( action === "prev"){
            
            if(this.state.id <= 1 ){
                this.setState(prevState =>({ id: 1}));

            }else{
                this.setState(prevState =>({ id: prevState.id - 1}));
            };
        }else if(action === "next"){
            this.setState(prevState =>({ id: prevState.id + 1}));
        }    
    }

    render(){
        console.log(this.state);
        return(
            <>
                <h2>Componente de Clases</h2>
                <div className="card">
                    <img src={this.state.data.image} alt={this.state.data.name} />
                    <p> {this.state.data.name} </p>
                    <div>
                        <button onClick={()=> this.ChangeId("prev")} >Prev</button>
                        <button onClick={()=> this.ChangeId("next")}>Next</button>
                    </div>
                </div>
                
            </>
        )
    }
}

export default CicloClase;