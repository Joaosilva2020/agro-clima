// src/App.jsx
import React from 'react';
import ClimaAgro from './ClimaAgro.jsx'; // 👈 Importa seu componente funcional

function App() {
  return (
    // Usa uma classe Tailwind (Exemplo: fundo cinza claro)
    <div className="min-h-screen bg-gray-100 p-8"> 
      <ClimaAgro /> 
    </div>
  );
}

export default App;