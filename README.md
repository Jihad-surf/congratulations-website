# 🎂💕 Site de Aniversário da Isabella 💕🎂

Um site romântico e elegante criado especialmente para celebrar o aniversário da Isabella.

## ✨ Características

- **Design Romântico**: Cores suaves em tons de rosa, branco, dourado e bege
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Elegantes**: Efeitos suaves de scroll e hover
- **Funcionalidades Interativas**: 
  - Confirmação de presença via WhatsApp
  - Localização no Google Maps
  - Galeria de fotos com carrossel
  - Contador regressivo
  - Menu de navegação flutuante

## 📁 Estrutura do Projeto

```
niver_isa/
├── index.html              # Página principal
├── styles.css             # Estilos principais
├── additional-styles.css  # Estilos adicionais
├── script.js             # JavaScript principal
└── README.md            # Este arquivo
```

## 🚀 Como Usar

1. **Personalização Básica**:
   - Edite o arquivo `index.html` para alterar as informações do evento
   - Modifique as datas, horários, endereços conforme necessário
   - Substitua as imagens placeholder pelas fotos reais

2. **Configuração do WhatsApp**:
   - No arquivo `script.js`, linha 60, altere o número de telefone:
   ```javascript
   const phoneNumber = '5511999999999'; // Seu número aqui
   ```

3. **Configuração do Google Maps**:
   - No arquivo `script.js`, linha 80, altere o endereço:
   ```javascript
   const address = encodeURIComponent('Seu endereço completo aqui');
   ```

4. **Data do Evento**:
   - No arquivo `script.js`, linha 120, ajuste a data:
   ```javascript
   const birthdayDate = new Date('2024-12-15T19:00:00').getTime();
   ```

## 📸 Substituindo as Imagens

As imagens atualmente são placeholders. Para substituí-las:

1. **Galeria de Fotos** (linhas 147-192 do HTML):
   - Substitua os links `https://via.placeholder.com/...` pelas suas fotos
   - Mantenha proporções quadradas (400x400px) para melhor resultado

2. **Carrossel** (linhas 195-210 do HTML):
   - Use imagens em formato retangular (600x400px)

3. **Timeline** (linhas 290-350 do HTML):
   - Use imagens pequenas e circulares (100x100px)

## 🎨 Personalizando as Cores

No arquivo `styles.css`, você pode alterar as cores principais:

```css
/* Cores principais */
:root {
  --cor-primaria: #CD8CAE;     /* Rosa principal */
  --cor-secundaria: #E6B8D6;   /* Rosa claro */
  --cor-texto: #8B4B6B;        /* Rosa escuro */
  --cor-fundo: #ffeef7;        /* Rosa muito claro */
}
```

## 📱 Funcionalidades Especiais

- **Corações Flutuantes**: Animação contínua de fundo
- **Easter Egg**: Clique 5 vezes no nome "Isabella" para uma surpresa
- **Contador Regressivo**: Mostra o tempo até o evento
- **Menu Flutuante**: Navegação rápida entre seções
- **Efeitos de Parallax**: Movimento suave durante o scroll
- **Animação de Digitação**: O nome aparece sendo "digitado"

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript ES6+**: Funcionalidades interativas
- **AOS Library**: Animações on scroll
- **Swiper.js**: Carrossel de imagens
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia elegante

## 🌍 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Dispositivos móveis iOS/Android

## 📝 Personalizações Avançadas

### Adicionando Mais Seções

Para adicionar uma nova seção, siga este padrão:

```html
<section id="nova-secao" class="nova-secao-class">
    <div class="container">
        <h2 class="section-title" data-aos="fade-up">Título da Seção</h2>
        <!-- Conteúdo da seção -->
    </div>
</section>
```

### Modificando Animações

No arquivo `script.js`, você pode ajustar as configurações do AOS:

```javascript
AOS.init({
    duration: 1000,        // Duração da animação
    easing: 'ease-in-out', // Tipo de transição
    once: true,           // Anima apenas uma vez
    offset: 100           // Distância para trigger
});
```

## 🎉 Dicas de Uso

1. **Teste em Diferentes Dispositivos**: Verifique como fica no mobile
2. **Otimize as Imagens**: Use formatos WebP para melhor performance
3. **Backup das Fotos**: Mantenha cópias das imagens originais
4. **Teste os Links**: Verifique se WhatsApp e Maps funcionam corretamente

## 💡 Ideias de Extensão

- Adicionar música de fundo
- Criar seção de depoimentos dos convidados
- Implementar RSVP com formulário
- Adicionar mapa interativo incorporado
- Criar versão para impressão

## 🤝 Suporte

Se precisar de ajuda com personalização ou encontrar algum problema:

1. Verifique se todos os arquivos estão no mesmo diretório
2. Teste em um servidor local (não funciona abrindo o arquivo diretamente)
3. Certifique-se de que a conexão com internet está ativa (para as bibliotecas CDN)

## 💝 Créditos

Criado com muito ❤️ por **Jihad** para celebrar a Isabella.

**Fontes utilizadas:**
- Dancing Script (Google Fonts)
- Playfair Display (Google Fonts)  
- Poppins (Google Fonts)

**Bibliotecas:**
- [AOS - Animate On Scroll](https://michalsnik.github.io/aos/)
- [Swiper.js](https://swiperjs.com/)
- [Font Awesome](https://fontawesome.com/)

---

*"Feito com amor para uma pessoa muito especial! 💕"*