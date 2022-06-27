const Exp = ({info, title})=>{
    return(
        <article>
            <h3>{title}</h3>
            <br/>
            <ul>
                {info.map( item =>
                    <li key ={item.id}>
                       {item.movie}                 
                    </li>
                ) }
            </ul>
        <br/>
        </article>
    )
}

export default Exp;