import {Link} from 'react-router-dom';
import styled from 'styled-components';


const MyHeader = styled.header ` 
  background-color: black;
  font-size: 20px;
  margin: 0;
  width: 100%;

`
const MyUl = styled.ul `
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
`

const Header =() =>{

    return(
        <MyHeader>
            <nav>
                <MyUl>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/experience'>Experience</Link>
                    <Link to='/movies'>Movies</Link>
                </MyUl>
            </nav>  
        </MyHeader>
    )
}

export default Header;