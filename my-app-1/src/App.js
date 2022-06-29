import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Movies from './pages/movies/Movies';
import Experience from './pages/experience/Experience';
import Register from './pages/register/Register'
import Login from './pages/register/Login'
import ProtectedRoutes from './componentes/protectedRoutes/ProtectedRoutes';
import Layout from './componentes/layout/Layout';
import { useState } from 'react';
import SingUp from './pages/register/SingUp';

function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="App main">
      <BrowserRouter >
        <Layout>
          <Routes>
            <Route path='/register' element={<Register />}>
              <Route path='/register/singup' element={<SingUp setIsRegister = {setIsRegister}/>}/>
              <Route path='/register/login' element={<Login setIsLogged = {setIsLogged} isRegister = {isRegister}/>}/>
            </Route>
            <Route element={<ProtectedRoutes isLogged = {isLogged} />}>
              <Route path="/home" element={<Home />}  />
              <Route path="/about" element={<About />}  />
              <Route path="/experience" element={<Experience />} /> 
              <Route path="/movies" element={<Movies />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
