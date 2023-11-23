import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/style.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import MortalidadeInfantil from './components/MortalidadeInfantil/MortalidadeInfantil';
import DoencasTransmissiveis from './components/DoencasTransmissiveis/DoencasTransmissiveis';
import DoencasNaoTransmissiveis from './components/DoencasNaoTransmissiveis/DoencasNaoTransmissiveis';
import MelhoriaGeralDaSaude from './components/MelhoriaGeralDaSaude/MelhoriaGeralDaSaude';
import Footer from './components/Footer/Footer';
// ...importações das outras páginas...

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/mortalidade-infantil" element={<MortalidadeInfantil />} />
        <Route path="/doencas-transmissiveis" element={<DoencasTransmissiveis />} />
        <Route path="/doencas-nao-transmissiveis" element={<DoencasNaoTransmissiveis />} />
        <Route path="/melhoria-geral-da-saude" element={<MelhoriaGeralDaSaude />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
