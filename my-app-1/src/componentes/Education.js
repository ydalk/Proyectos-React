const Education = ({info, title})=>{

    return(
        <article>
            <h3>{title}</h3>
            <br/>
            <ul>                
                {info.map( item =>
                    <li key ={item.id}>
                        {item.institute}                 
                    </li>
                ) }
            </ul>
        <br/>
        </article>
    )
}

export default Education;