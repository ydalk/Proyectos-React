import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Movies from './pages/movies/Movies';
import Experience from './pages/experience/Experience';
import Header from './componentes/Header';

function App() {
  return (
    <div className="App main">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}  />
          <Route path="/about" element={<About />}  />
          <Route path="/experience" element={<Experience />} /> 
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
