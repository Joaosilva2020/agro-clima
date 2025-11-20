# 📚 GUIA SIMPLES - O QUE É CADA COISA

Neste projeto, usamos 4 linguagens/ferramentas diferentes. Veja qual arquivo usa o quê:

---

## 🎨 PARTE 1: CSS (Estilos - Cores, Tamanho, Layout)

### O que é CSS?
CSS deixa a página bonita! Define cores, tamanhos, fontes, espaçamento.

### Arquivos CSS do projeto:
- `src/index.css` - Estilos globais (afeta toda a página)
- `src/App.css` - Estilos específicos do componente App

### Exemplo de código CSS:
```css
body {
  background: #132116;  /* Cor de fundo verde */
  color: #E9E9E9;       /* Cor do texto cinza */
  font-size: 16px;      /* Tamanho da fonte */
}

button {
  background: #ECB417;  /* Cor do botão amarelo */
  padding: 10px;        /* Espaçamento interno */
  border-radius: 5px;   /* Cantos arredondados */
}
```

**Onde encontra no projeto:** `src/index.css`

---

## 🟨 PARTE 2: TAILWIND (CSS de atalho - Classes prontas)

### O que é Tailwind?
É um framework CSS que oferece classes prontas. Em vez de escrever CSS, você usa classes.

### Exemplo Tailwind vs CSS tradicional:

**COM TAILWIND:**
```html
<button class="bg-agro-yellow text-agro-dark px-4 py-2 rounded">
  Buscar
</button>
```

**SEM TAILWIND (CSS puro):**
```css
button {
  background: #ECB417;
  color: #191919;
  padding: 8px 16px;
  border-radius: 4px;
}
```

### Arquivo de configuração Tailwind:
- `tailwind.config.js` - Define cores personalizadas (agro-yellow, agro-dark, etc)

**Onde encontra no projeto:** `tailwind.config.js` e **dentro do JSX** (classes `bg-agro-dark`, `text-agro-yellow`, etc)

---

## ⚙️ PARTE 3: JAVASCRIPT (Programação - Lógica)

### O que é JavaScript?
JavaScript é a programação! Faz a página funcionar. Exemplo: quando você clica um botão, algo acontece.

### Arquivos JavaScript do projeto:
- `src/main.jsx` - Inicia o React
- `src/services/weatherService.js` - Busca dados da API
- `vite.config.js` - Configuração do build
- `tailwind.config.js` - Configuração do Tailwind

### Exemplo de código JavaScript:
```javascript
// Quando o botão é clicado, buscar a cidade
function handleSearch(city) {
  console.log("Você digitou: " + city);
  // ...buscar dados...
}

// Chamar a API
async function getWeatherByCity(city) {
  const response = await axios.get('https://api.openweathermap.org/...');
  return response.data;
}
```

**Onde encontra no projeto:** `src/services/weatherService.js`

---

## ⚛️ PARTE 4: REACT (Componentes - Partes da página)

### O que é React?
React divide a página em "componentes" (partes reutilizáveis). Cada componente é um arquivo `.jsx`.

### Exemplo:
```jsx
// Um componente é como uma função que retorna HTML
function Header() {
  return (
    <header>
      <h1>Agro M2</h1>
      <p>Clima para o Agro</p>
    </header>
  );
}

// Você pode usar esse componente em outro arquivo:
// <Header />
```

### Arquivos React do projeto:
- `src/App.jsx` - Componente principal (maior)
- `src/main.jsx` - Ponto de entrada
- `src/components/Header.jsx` - Componente do cabeçalho
- `src/components/SearchBox.jsx` - Componente do input/botão
- `src/components/WeatherCard.jsx` - Componente dos dados
- `src/components/ErrorMessage.jsx` - Componente de erro

**Onde encontra no projeto:** Tudo em `src/` com extensão `.jsx`

---

## 📊 TABELA RESUMIDA

| Arquivo | Linguagem | O que faz |
|---------|-----------|----------|
| `index.css` | CSS | Estilos globais |
| `App.css` | CSS | Estilos do App |
| `tailwind.config.js` | JavaScript | Define cores Tailwind |
| `vite.config.js` | JavaScript | Configuração de build |
| `main.jsx` | React | Inicia a aplicação |
| `App.jsx` | React | Componente principal |
| `Header.jsx` | React | Componente header |
| `SearchBox.jsx` | React | Componente input/botão |
| `WeatherCard.jsx` | React | Componente resultado |
| `ErrorMessage.jsx` | React | Componente erro |
| `weatherService.js` | JavaScript | Busca dados API |
| `package.json` | JSON | Lista dependências |

---

## 🎯 ORDEM PARA APRENDER

1. **CSS** - Aprenda como deixar algo bonito
2. **JavaScript** - Aprenda como fazer funcionar
3. **Tailwind** - Use classes prontas em vez de escrever CSS
4. **React** - Divida a página em componentes

---

## ✅ RESUMO FINAL

- **CSS** = Cores e estilos
- **JavaScript** = Lógica e funcionamento
- **Tailwind** = Classes CSS prontas
- **React** = Dividir em componentes reutilizáveis

Cada um tem seu próprio arquivo e função!

---

**Próxima etapa: Quer que eu simplifique alguma parte específica?**
