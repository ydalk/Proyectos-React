import React, { Component }  from 'react'; //importamos la clase Component propia de React
import Home from './Home'
import SingIn from './SingIn'
import SingUp from './SingUp'

class Navbar extends Component{ //heredamos de Component

//creamos el constructor, con super() llamamos los parametros de la clase padre
    constructor(){
        super();
        //definimos dentro del estado, todos los datos que vayan a estar en constante cambio dentro del componente
        this.state = {
            view : {},
            userInfo : {
                name:"",
                email : "",
                password : ""
            }
        }
    }

    handleUserRegistry({name, email, password}){
        this.setState({userInfo: {
            name: name,
            email : email,
            password : password
        }})
    }


    // handlerView = (arg) => {
    //     if(arg === "sign_up" ){
    //         this.state.view : <SingUp userRegistry={this.handlerUserRegistry}/>
    //     }else if(arg === "sign_in"){
    //         this.state.view(<SingIn userInfo={this.userInfo}/>)
    //     }else if(arg === "home"){
    //         this.state.view(<Home/>)
    //     }
    // }

    handlerView = (arg) => {
        if(arg === "home"){
            this.setState({view: <Home />})
        }
    }
    
componentDidMount(){
    this.handlerView();
}

componentDidUpdate(prevProps, prevState){
    if(prevState.view !== this.state.view){
        this.handlerView();
    }
}

   render(){
    return(
        <div>
            <nav>
                <button onClick={()=> this.handlerView("home")}>Home</button>
                {/* <button onClick={()=> this.handlerView("sign_up")}>Sign Up</button>
                <button onClick={()=> this.handlerView("sign_in")}>Sign In</button> */}
            </nav>
            <div >
                {
                    this.state.view
                }
            </div>
        </div>
    )
   } 
}
export default Navbar;