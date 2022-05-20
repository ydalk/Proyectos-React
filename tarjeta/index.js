const state = {
    personalData: {
        name: "Johnny",
        lastname: "Depp",
        age: 44,
        nationality: "American",
        residence: "France",
        occupation: "Actor / Producer",
        avatar: "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg"
    },
    experience: [
        { id: 1, movie: "Pirates of the Caribbean"},
        { id: 2, movie: "Edward Scissors hand"},
        { id: 3, movie: "Johnny Brasco"}
    ],
    education: [
        { id: 1, institute: "University of Arts."},
        { id: 2, institute: "University UCLA"},
        { id: 3, institute: "University of Paris"}
    ],
    bio: "I am a person like everyone else, trying to have a normal life whilst doing the things that make me happy"
}

const Header =() =>{

    return(
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Movies</li>
                </ul>
            </nav>  
        </header>
    )
}


const Avatar =({avatar})=>{
    return(
        <img src={avatar}></img>
        )
    }

const Info = ({name, lastname, age, nationality}) =>{
    return(
        <article>
            <h3>Personal Information</h3>
            <ul>
                <p>Name: {name}</p>                       
                <p>Lastname: {lastname}</p>                       
                <p>Age: {age}</p>                       
                <p>Nationality: {nationality}</p>                      
            </ul>
        <br/>
        </article>
    )
}
const {experience}= state
const Experience = ()=>{
    return(
        <article>
            <h3>Experience in movies: </h3>
            <ul>
                {experience.map( item =>
                    <li key ={item.id}>
                       {item.movie}                 
                    </li>
                ) }
            </ul>
        <br/>
        </article>
    )
}

const {education}= state
const Education = ()=>{
    return(
        <article>
            <h3>Education: </h3>
            <ul>
                {education.map( item =>
                    <li key ={item.id}>
                        {item.institute}                 
                    </li>
                ) }
            </ul>
        <br/>
        </article>
    )
}

const Bio =({bio})=>{
    return(
        <article>
            <h3>Bio:</h3>
            <p>{bio}</p>
        </article>
    )
}

const App = (
    <div class="main">
        <Header/>
        <section class="tarjeta">
            <Avatar
                avatar = {state.personalData.avatar}
            />
            <div class="datos">
                <Info 
                    name = {state.personalData.name}
                    lastname = {state.personalData.lastname}
                    age = {state.personalData.age}
                    nationality = {state.personalData.nationality}
                />            
                <Education/>
                <Experience/>
                <Bio
                    bio = {state.bio}
                />
            </div>
        </section>
            
    </div>
)


const htmlElement = document.getElementById("root");

ReactDOM.render(App, htmlElement);

