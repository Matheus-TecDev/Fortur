import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header'; // Certifique-se de que o caminho está correto
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';  // Importando o componente com o nome correto
import FaleConosco from './pages/FaleConosco';


const Services = () => <div>Serviços</div>;
const Pacotes = () => <div>Pacotes</div>;
const Blog = () => <div>Blog</div>;
const Cambio = () => <div>Câmbio Exchange</div>;

// Dropdown de Serviços
const Servico1 = () => <div>Serviço 1</div>;
const Servico2 = () => <div>Serviço 2</div>;
const Servico3 = () => <div>Serviço 3</div>;
const Servico4 = () => <div>Serviço 4</div>;
const Servico5 = () => <div>Serviço 5</div>;
const Servico6 = () => <div>Serviço 6</div>;
const Servico7 = () => <div>Serviço 7</div>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Redireciona "/" para "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Rotas principais */}
        <Route path="/home" element={<Home />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Pacotes" element={<Pacotes />} />
        <Route path="/FaleConosco" element={<FaleConosco />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Cambio" element={<Cambio />} />

        {/* Rotas do dropdown de "Serviços" */}
        <Route path="/servico1" element={<Servico1 />} />
        <Route path="/servico2" element={<Servico2 />} />
        <Route path="/servico3" element={<Servico3 />} />
        <Route path="/servico4" element={<Servico4 />} />
        <Route path="/servico5" element={<Servico5 />} />
        <Route path="/servico6" element={<Servico6 />} />
        <Route path="/servico7" element={<Servico7 />} />
      </Routes>
    </Router>
  );
}

export default App;

