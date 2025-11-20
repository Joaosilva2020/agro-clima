# 📸 GUIA PARA ADICIONAR SCREENSHOTS

Este arquivo explica como adicionar prints (screenshots) da interface ao README.

---

## 📁 Passos para Adicionar Prints

### 1. **Capturar os Screenshots**

Use a tecla **Print Screen** ou ferramentas de captura:

**Windows:**
- Tecla `Print` → Cole em Paint
- `Snipping Tool` (Windows 10+)
- `Shift + Win + S` (Captura rápida)

**Mac:**
- `Cmd + Shift + 3` (tela inteira)
- `Cmd + Shift + 4` (seleção)

**Linux:**
- `Print` key
- `Shift + PrtScn`

---

## 2. **Screenshots Recomendados**

Capture as seguintes telas:

### A) **Header e Search Box**
```
Mostrar:
  - Logo 🌾 Agro M2
  - Campo de input
  - Botão "Buscar Clima"
```

### B) **Resultado de Busca (Desktop)**
```
Mostrar:
  - Nome da cidade e país
  - Temperatura grande
  - Sensação térmica (amarelo)
  - Grid com Umidade, Pressão, Vento, Nuvens
  - Informações extras (min/max, nascer/pôr)
```

### C) **Resultado de Busca (Mobile)**
```
Mostrar:
  - Mesmo layout em tela pequena
  - Responsividade funcionando
```

### D) **Mensagem de Erro**
```
Mostrar:
  - Erro quando cidade não existe
  - Mensagem clara em vermelho
```

---

## 3. **Otimizar as Imagens**

### Redimensionar (Opcional)
```bash
# Windows - Use Paint ou online-convert.com
# Mac - Preview app
# Linux - GIMP ou ImageMagick
```

### Comprimir
Use ferramentas online gratuitas:
- https://tinypng.com (PNG e JPG)
- https://compressor.io (Múltiplos formatos)
- https://imageoptim.com (Mac)

---

## 4. **Criar Pasta de Images**

```bash
# Dentro do projeto
mkdir images
```

### Estrutura sugerida:
```
images/
├── 01-header.png
├── 02-search.png
├── 03-resultado-desktop.png
├── 04-resultado-mobile.png
├── 05-erro.png
└── 06-paleta-cores.png
```

---

## 5. **Adicionar ao README.md**

Edite o arquivo `README.md` na seção de Screenshots e adicione:

```markdown
## 📸 Screenshots

### Desktop - Header e Busca
![Header e Search Box](images/01-header.png)

### Desktop - Resultado de Busca
![Resultado Desktop](images/03-resultado-desktop.png)

### Mobile - Responsividade
![Resultado Mobile](images/04-resultado-mobile.png)

### Tratamento de Erro
![Mensagem de Erro](images/05-erro.png)

### Paleta de Cores Agro M2
![Paleta Cores](images/06-paleta-cores.png)
```

---

## 6. **Fazer Upload para o GitHub**

```bash
# 1. Adicionar os arquivos
git add images/
git add README.md

# 2. Fazer commit
git commit -m "docs: add screenshots to README"

# 3. Fazer push
git push origin main
```

---

## 7. **Alternativa: Usar Links Online**

Se preferir, pode usar:

### Imgur
1. Acesse https://imgur.com
2. Faça upload da imagem
3. Copie o link
4. Adicione ao README: `![Alt Text](link-da-imagem)`

### GitHub (Direto)
1. Crie pasta `images/` no repositório
2. Faça upload das imagens
3. Use: `![Alt Text](images/nome-arquivo.png)`

---

## 8. **Dicas para Boas Screenshots**

✅ **Faça:**
- Capture a resolução padrão (1920x1080 ou 1366x768)
- Mostre dados reais da API
- Inclua o header e footer
- Use cidades diferentes em cada exemplo
- Adicione legendas descritivas

❌ **Evite:**
- Screenshots com dados confidenciais
- Tamanhos muito pequenos (difícil de ler)
- Muitas imagens repetidas
- Qualidade ruim/pixelada

---

## 9. **Exemplo Completo de Markup**

```markdown
## 📸 Interface da Aplicação

### Home - Header e Busca
![Header da aplicação com logo Agro M2 e campo de busca](images/01-header.png)
*Header com logo Agro M2, campo para digitar cidade e botão de busca*

### Resultado - Dados Climáticos (Desktop)
![Card com dados climáticos exibindo temperatura, umidade, vento](images/03-resultado-desktop.png)
*Exibição completa dos dados: temperatura 28°C, sensação térmica 30°C, umidade 65%*

### Responsividade - Mobile
![Mesmo layout em tela mobile](images/04-resultado-mobile.png)
*Interface responsiva adaptada para celular*

### Tratamento de Erro
![Mensagem de erro vermelha: Cidade não encontrada](images/05-erro.png)
*Mensagem clara quando a cidade não é encontrada*
```

---

## 10. **Validar no GitHub**

Após fazer push:

1. Acesse https://github.com/Joaosilva2020/agro-clima
2. Abra o arquivo `README.md`
3. Verifique se os prints aparecem corretamente
4. Se não aparecerem, verifique os paths das imagens

---

## 📋 Checklist Final

- [ ] Screenshots capturados
- [ ] Imagens comprimidas
- [ ] Pasta `images/` criada
- [ ] Imagens adicionadas ao repositório
- [ ] README.md atualizado com as imagens
- [ ] Git add/commit/push realizado
- [ ] Imagens aparecem no GitHub corretamente

---

## 🎨 Sugestão: Criar Composição Visual

Use ferramentas como:
- **Figma** (gratuito) - Criar mockups bonitos
- **Canva** - Designs prontos
- **Adobe XD** - Prototipagem
- **Sketch** - Design profissional

Isso pode deixar o README ainda mais profissional!

---

**Pronto! Seu README terá prints incríveis! 🚀**
