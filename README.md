# 🌾 Clima para o Agro M2

Aplicação web moderna para consultar informações de clima integrada com a API OpenWeather. Desenvolvida com React, Tailwind CSS e Axios.

## 📋 Requisitos Atendidos

- ✅ **Consumo de API OpenWeather**: Integração com `https://api.openweathermap.org/data/2.5/weather`
- ✅ **Informações Climáticas**: Temperatura, sensação térmica, umidade, pressão, vento, cobertura de nuvens
- ✅ **Paleta Agro M2**: 
  - Amarelo: #ECB417
  - Verde Escuro: #132116
  - Cinza Claro: #E9E9E9
  - Preto: #191919
- ✅ **React + JavaScript**: Componentes funcionais com hooks
- ✅ **Tailwind CSS**: Estilização responsiva
- ✅ **Axios**: Requisições HTTP para a API
- ✅ **Responsivo**: Design adaptável para mobile e desktop

## 🚀 Iniciando

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### 3. Build para Produção

```bash
npm run build
```

## 📦 Tecnologias Utilizadas

- **React 19.2.0** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS 3.3** - Framework CSS utilitário
- **Axios 1.6** - Cliente HTTP
- **JavaScript ES6+** - Linguagem de programação

## 🏗️ Estrutura do Projeto

```
agro-clima/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Cabeçalho com logo Agro M2
│   │   ├── SearchBox.jsx       # Input de busca de cidades
│   │   ├── WeatherCard.jsx     # Card com dados do clima
│   │   └── ErrorMessage.jsx    # Componente de mensagem de erro
│   ├── services/
│   │   └── weatherService.js   # Serviço de API OpenWeather
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Ponto de entrada
│   ├── App.css                 # Estilos da aplicação
│   └── index.css               # Estilos globais
├── public/                     # Arquivos estáticos
├── index.html                  # HTML principal
├── vite.config.js              # Configuração Vite
├── tailwind.config.js          # Configuração Tailwind
├── postcss.config.js           # Configuração PostCSS
└── package.json                # Dependências do projeto
```

## 🎨 Funcionalidades

### Header
- Logo da Agro M2 com emoji 🌾
- Nome da aplicação
- Ícone de clima responsivo

### Busca
- Input de texto para digitar o nome da cidade
- Botão de busca interativo
- Indicador de carregamento

### Exibição de Dados
- **Temperatura atual** em graus Celsius
- **Sensação térmica** destacada
- **Umidade** em percentual
- **Pressão atmosférica** em hPa
- **Velocidade do vento** em m/s
- **Cobertura de nuvens** em percentual
- **Temperatura máxima e mínima** do dia
- **Horários** de nascer e pôr do sol

### Tratamento de Erros
- Mensagens claras em caso de cidade não encontrada
- Tratamento de erros de API
- Validação de inputs

## 🔑 Configuração da API

A chave da API está armazenada em `.env`:

```
VITE_OPENWEATHER_API_KEY=f84d5e0c4a20e86c0d88ca0eba0fcaa0
```

> **Nota**: Para uso em produção, use variáveis de ambiente privadas e nunca commite chaves na repository.

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- 📱 Celulares (320px+)
- 📱 Tablets (640px+)
- 🖥️ Desktops (1024px+)

## 🎯 Exemplo de Uso

1. Digite o nome de uma cidade (ex: "São Paulo", "Rio de Janeiro")
2. Clique em "Buscar Clima"
3. Veja as informações meteorológicas atualizadas

## 📄 Licença

ISC

## 👨‍💻 Desenvolvedor

Desenvolvido como parte do projeto Agro M2 - Clima para o Agro
