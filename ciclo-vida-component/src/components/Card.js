import {useState, useEffect} from "react";
import Botones from "./Botones";

const Card = (props) => {

  const [data, setData] = useState({});
  const [id, setId] = useState(1);

useEffect(() =>{
  const request = async() => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const result = await response.json();
    setData(result);
  };
  request();
},[id]);

const HandleChangeId = ( action ) =>{
  if( action === "prev"){
      setId(prevState => {          
        if(prevState <=1){
          setId(1)
        }else{
          setId(prevState - 1)
        }
      });
      
  }else if(action === "next"){
      setId(prevState => prevState + 1);
      
  }    
}

  return (
    <>
      <div className="card">
        <img src={data.image} alt={data.name} />
          <p> {data.name} </p>
      </div>
      <Botones changeId = {HandleChangeId}/> 
    </>
  )
}
export default Card;