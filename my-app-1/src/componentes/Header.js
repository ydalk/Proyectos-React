import {Link} from 'react-router-dom'

const Header =() =>{


    return(
        <header>
            <nav>
                <ul>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/experience'>Experience</Link>
                    <Link to='/movies'>Movies</Link>
                </ul>
            </nav>  
        </header>
    )
}

export default Header;