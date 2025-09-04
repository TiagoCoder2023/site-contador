# Site Contador - Mariana e Tiago

Um site romântico com contador e galeria de fotos no estilo polaroid.

## 🚀 Como executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm start
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## ✨ Funcionalidades

- **Contador Regressivo**: Conta automaticamente o tempo restante até 09/09/2024
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Gradiente Verde Água**: Background com gradiente do verde água até preto
- **Galeria Polaroid**: 20 espaços para fotos no estilo polaroid com efeitos hover
- **Título Personalizado**: "Mariana e Tiago" em destaque

## 📸 Como adicionar fotos

Para adicionar suas fotos, substitua o conteúdo do placeholder nas divs `.photo-placeholder` no arquivo `src/App.js`. Você pode:

1. Adicionar URLs de imagens online
2. Importar imagens locais e usar como background
3. Usar tags `<img>` dentro dos placeholders

Exemplo:
```jsx
<div className="photo-placeholder">
  <img src="sua-foto.jpg" alt="Foto 1" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
</div>
```

## 🎨 Personalização

- **Cores**: Modifique o gradiente no arquivo `src/App.css` na classe `.App`
- **Título**: Altere o texto "Mariana e Tiago" no arquivo `src/App.js`
- **Data**: Modifique a data no `useEffect` do contador
- **Fotos**: Ajuste o número de fotos alterando o `Array.from({ length: 20 })`

## 📱 Responsividade

O site foi desenvolvido para ser totalmente responsivo, adaptando-se a diferentes tamanhos de tela:
- Desktop: Layout completo com 4 colunas de fotos
- Tablet: Layout adaptado com 3 colunas
- Mobile: Layout otimizado com 2 colunas

---

Feito com ❤️ para Mariana e Tiago
