import {useState, useEffect} from "react";

const CicloFuncional = () => {

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


const changeId = ( action ) =>{
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
      <h2>Componente Funcional</h2>
      <div className="card">
        <img src={data.image} alt={data.name} />
          <p> {data.name} </p>
          <div>
              <button onClick={()=> changeId("prev")}>Prev</button>
              <button onClick={()=> changeId("next")}>Next</button>
          </div>
      </div>
    </>
  );
}

export default CicloFuncional