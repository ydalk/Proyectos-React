import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {

    colors2 = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
  
    state = {
      colors : ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
    };
    

  shuffle = ()=> {
    this.setState(prevState => {
      return {        
        colors : prevState.colors.map(()=> 
        //this.state.colors[Math.floor(Math.random() * this.state.colors.length)])
        this.colors2[Math.floor(Math.random() * this.colors2.length)])
        }
      })
      console.log(this.state.colors);
      
  }
    
   render() {
     return (
       <div className="container">
        <div className="panel">
          {this.state.colors.map((color, index) => <div key={index} className={color}>{color}</div>)}
        </div>
        <Button fn={this.shuffle} />
      </div>

    )
  }
}
