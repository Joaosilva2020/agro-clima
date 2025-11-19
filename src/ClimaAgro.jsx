// src/ClimaAgro.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClimaAgro() {
  const [dadosDoClima, setDadosDoClima] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => { 
    const API_URL = 'https://home.openweathermap.org/api_keys'; 
    
    const buscarDados = async () => {
      try {
        const resposta = await axios.get(API_URL);
        setDadosDoClima(resposta.data); 
        setCarregando(false);
      } catch (e) {
        setErro("Não foi possível carregar os dados do clima. Verifique a URL da API.");
        setCarregando(false);
      }
    };
    
    buscarDados();
  }, []); 

  // --- Renderização Condicional (HTML/JSX com Tailwind) ---

  if (carregando) {
    // Exemplo de Tailwind
    return <div className="p-4 text-center text-xl font-medium text-blue-500">Carregando dados...</div>;
  }

  if (erro) {
    return <div className="p-4 text-center text-xl text-red-600 border border-red-300 bg-red-50 rounded-lg">Erro: {erro}</div>;
  }

  // Renderiza os dados após o carregamento
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        Informações Agro-Clima
      </h1>
      
      {dadosDoClima ? (
        <div className="space-y-3">
          {/* 💡 Exemplo de como acessar dados - AJUSTE estes campos (local, temperatura) para os nomes da sua API */}
          <p className="text-lg">Local: <span className="font-semibold">{dadosDoClima.local || 'N/A'}</span></p>
          <p className="text-lg">Temperatura: <span className="text-2xl font-bold text-green-600">{dadosDoClima.temperatura || 'N/A'}°C</span></p>
          <p className="text-lg">Umidade: <span className="font-semibold">{dadosDoClima.umidade || 'N/A'}%</span></p>
        </div>
      ) : (
        <p className="text-gray-500">Nenhum dado encontrado.</p>
      )}
    </div>
  );
}

export default ClimaAgro;