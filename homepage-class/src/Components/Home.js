import React, { Component }  from 'react';

class Home extends Component{
    constructor(){
        super();
        this.state = {}
    }

   render(){
       return (
           <div>
               <h1>Welcome</h1>
               <p>Welcome to our site.</p>
               <p>Please, sign in to see all our events.</p>
               <p>Sign up if you don't have an account.</p>
           </div>
         )
   }
}
export default Home;