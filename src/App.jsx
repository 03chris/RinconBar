import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import MenuContainer from './pages/MenuContainer/MenuContainer'

import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/all" element={<MenuContainer />}/>
        <Route path="/categorias/:type" element={<MenuContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
