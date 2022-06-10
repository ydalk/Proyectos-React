
const Botones = ({changeId}) => {
  return (
    < >
        <button className="boton" onClick={()=> changeId("prev")}>Prev</button>
        <button className="boton" onClick={()=> changeId("next")}>Next</button>
    </>
  )
}

export default Botones