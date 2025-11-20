# 🌾 Clima para o Agro M2

Aplicação web moderna para consultar informações de clima integrada com a **API OpenWeather**. Desenvolvida com **React**, **Tailwind CSS** e **Axios** seguindo a identidade visual da Agro M2.

---

## 📋 Requisitos do Projeto

- ✅ **API OpenWeather**: Consumo de dados climáticos em tempo real
- ✅ **Exibição de Clima**: Temperatura, sensação térmica, umidade, condição do céu
- ✅ **Paleta Agro M2**: Cores oficiais (#ECB417, #132116, #E9E9E9, #191919)
- ✅ **React + JavaScript**: Componentes funcionais com hooks
- ✅ **Tailwind CSS**: Estilização responsiva
- ✅ **Axios**: Requisições HTTP
- ✅ **Interface Simples**: Design intuitivo e organizado
- ✅ **Responsivo**: Mobile, tablet e desktop

---

## 🚀 Guia de Instalação e Execução

### ✅ Pré-requisitos

- **Node.js 16+** instalado ([Download](https://nodejs.org/))
- **npm** ou **yarn** (vem com Node.js)
- **Git** (para clonar o repositório)

### 📥 Passo 1: Clonar o Repositório

```bash
git clone https://github.com/Joaosilva2020/agro-clima.git
cd agro-clima
```

### 📦 Passo 2: Instalar Dependências

```bash
npm install
```

Isso instalará:
- React 19.2.0
- Tailwind CSS 3.3.0
- Axios 1.6.0
- Vite 7.2.2

### 🎬 Passo 3: Executar em Desenvolvimento

```bash
npm run dev
```

**Saída esperada:**
```
  VITE v7.2.2  ready in 290 ms

  ➜  Local:   http://localhost:5173/
```

### 🌐 Passo 4: Acessar a Aplicação

Abra seu navegador e acesse:
```
http://localhost:5173
```

---

## 🏗️ Estrutura do Projeto

```
agro-clima/
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Header.jsx              # Logo e header Agro M2
│   │   ├── SearchBox.jsx           # Input + Botão de busca
│   │   ├── WeatherCard.jsx         # Exibição dos dados climáticos
│   │   └── ErrorMessage.jsx        # Mensagens de erro
│   │
│   ├── 📁 services/
│   │   └── weatherService.js       # Integração com API OpenWeather
│   │
│   ├── App.jsx                     # Componente raiz (lógica principal)
│   ├── main.jsx                    # Ponto de entrada React
│   ├── App.css                     # Estilos específicos
│   └── index.css                   # Estilos globais + Tailwind
│
├── 📁 public/                       # Arquivos estáticos
├── index.html                       # HTML principal
├── package.json                     # Dependências
├── vite.config.js                   # Configuração Vite
├── tailwind.config.js               # Customização Tailwind
├── postcss.config.js                # Processamento CSS
├── .env                             # Variáveis de ambiente
└── .gitignore                       # Arquivos ignorados no git
```

---

## 🎨 Interface da Aplicação

### Header
- 🌾 Logo da Agro M2
- "Clima para o Agro" com identidade visual
- Ícone de clima responsivo

### Busca
- Input para digitar o nome da cidade
- Botão "Buscar Clima" com estado de carregamento
- Validação automática

### Exibição de Dados
- **Temperatura atual** (grande destaque em Celsius)
- **Sensação térmica** (amarelo #ECB417)
- **Umidade** (%)
- **Pressão** (hPa)
- **Velocidade do vento** (m/s)
- **Cobertura de nuvens** (%)
- **Temperatura máxima e mínima**
- **Horários de nascer e pôr do sol**
- **Descrição do clima com emoji** (☀️ ☁️ 🌧️ ❄️)

### Tratamento de Erros
- Mensagens claras quando cidade não é encontrada
- Validação de inputs vazios
- Feedback visual durante carregamento

---

## 📱 Responsividade

A aplicação funciona perfeitamente em:

| Dispositivo | Resolução | Status |
|-----------|-----------|--------|
| 📱 Celular | 320px+ | ✅ Otimizado |
| 📱 Tablet | 640px+ | ✅ Otimizado |
| 🖥️ Desktop | 1024px+ | ✅ Otimizado |

**Para testar:** Abra as ferramentas de desenvolvedor (F12) → Modo responsivo (Ctrl+Shift+M)

---

## 🔧 Comandos Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Visualizar build de produção
npm run preview

# Verificar erros de código (ESLint)
npm run lint
```

---

## 🌐 API OpenWeather

### Endpoint Usado
```
https://api.openweathermap.org/data/2.5/weather
```

### Parâmetros
- `q={city}` - Nome da cidade
- `appid={API_KEY}` - Chave de autenticação
- `units=metric` - Retorna em Celsius
- `lang=pt_br` - Respostas em português

### Dados Retornados
```json
{
  "name": "São Paulo",
  "main": {
    "temp": 28,
    "feels_like": 30,
    "humidity": 65,
    "pressure": 1013
  },
  "weather": [{
    "main": "Clouds",
    "description": "nublado"
  }],
  "wind": { "speed": 5 },
  "clouds": { "all": 75 },
  "sys": {
    "sunrise": 1234567890,
    "sunset": 1234567890
  }
}
```

---

## 🔑 Configuração da API

A chave está em `.env`:
```
VITE_OPENWEATHER_API_KEY=07368b14adf09cb8f2f452999e2d0cc4
```

> ⚠️ **Segurança**: Nunca commite `.env` com chaves reais em produção!

---

## 📦 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|-----------|
| React | 19.2.0 | Framework UI |
| Vite | 7.2.2 | Build tool |
| Tailwind CSS | 3.3.0 | Estilização |
| Axios | 1.6.0 | Requisições HTTP |
| JavaScript | ES6+ | Linguagem |
| Node.js | 16+ | Runtime |

---

## 🎯 Como Usar

1. **Abra a aplicação** em http://localhost:5173
2. **Digite uma cidade** no input (ex: "São Paulo", "Paris", "Tokyo")
3. **Clique em "Buscar Clima"**
4. **Veja os dados atualizados** com informações meteorológicas

### Exemplos de Cidades
- São Paulo
- Rio de Janeiro
- New York
- Paris
- Tokyo
- Berlin
- Londres
- Tóquio

---

## 🐛 Troubleshooting

### Porta 5173 já está em uso
```bash
# O Vite usará a próxima porta disponível (5174, 5175, etc.)
# Ou libere a porta encerando o processo
```

### Erro "cidade não encontrada"
- Verifique o nome da cidade em português/inglês
- Tente outra cidade para confirmar que a API está funcionando

### Variáveis de ambiente não carregam
```bash
# Reinicie o servidor
npm run dev
```

### node_modules corrompido
```bash
# Limpe e reinstale
rm -r node_modules package-lock.json
npm install
```

---

## 📚 Arquivos de Documentação

- **README.md** ← Você está aqui
- **DOCUMENTACAO.md** - Documentação técnica detalhada
- **TESTES.md** - Guia de testes manual
- **QUICKSTART.md** - Início rápido
- **SUMARIO.txt** - Resumo do projeto

---

## 🎨 Paleta de Cores Agro M2

```css
--agro-yellow:  #ECB417  /* Amarelo */
--agro-dark:    #132116  /* Verde Escuro */
--agro-light:   #E9E9E9  /* Cinza Claro */
--agro-black:   #191919  /* Preto */
```

---

## 📸 Screenshots

> Adicione prints da interface aqui mostrando:
> - Header com logo Agro M2
> - Campo de busca
> - Resultado com dados climáticos
> - Layout em mobile

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
Conecte seu repositório GitHub em https://netlify.com

### GitHub Pages
```bash
npm run build
# Faça upload da pasta 'dist/'
```

---

## 📝 Licença

ISC

---

## 👨‍💻 Desenvolvedor

Desenvolvido como parte do projeto **Agro M2 - Clima para o Agro**

**Repositório:** https://github.com/Joaosilva2020/agro-clima

---

## 🤝 Contribuições

Encontrou um bug? Quer adicionar uma feature?

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Suporte

Para dúvidas ou sugestões, abra uma [issue](https://github.com/Joaosilva2020/agro-clima/issues)

---

## ⭐ Se gostou, deixe uma estrela! ⭐

Isso ajuda a visibilidade do projeto!
