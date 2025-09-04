import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [flippedCards, setFlippedCards] = useState(new Set());

  // Textos personalizados para cada polaroid
  const polaroidTexts = [
    "Seu sorriso é a perfeição que Deus criou ❤️",
    "Aquele sorriso que me faz feliz todos os dias 😊",
    "Você é a melhor pessoa do mundo 💕",
    "Você é significado da minha vida 💫",
    "Com você eu sou o melhor de mim 💕",
    "Amo te fazer feliz 💕",
    "Mesmo que o São Paulo perca, eu não perco, porque tenho você 💕",
    "Amo te fazer sorrir 💕",
    "Amo dividir minha vida com você 💕",
    "Amo te fazer sorrir 💕",
    "Com você aprendi a amar 💕",
    "O jeito que você me faz perceber que estou errado sempre KKKKKKKKKK",
    "Prometo amar você para sempre 💕",
    "Sempre te levar pra comer rodízio 🍽️",
    "Nunca deixar de te apoiar !!!!!",
    "Você é meu bem mais precioso 💕",
    "Obrigado por tudo meu bem 💕",
    "Você é a dona do meu coração 💕",
    "Um dia chego no seu bíceps 💪",
    "Pra sempre com você 💕"
  ];

  // Array de fotos - todas as 20 fotos completas
  const polaroidImages = [
    "/images/foto1.jpeg", // Selfie no carro
    "/images/foto2.jpeg", // Selfie no espelho
    "/images/foto3.jpeg", // Selfie divertida com caretas
    "/images/foto4.jpeg", // Selfie com blusa azul
    "/images/foto5.jpeg", // Selfie noturna
    "/images/foto6.jpeg", // Selfie com sorvete
    "/images/foto7.jpeg", // Selfie com coração
    "/images/foto8.jpeg", // Selfie na rua
    "/images/foto9.jpeg", // Selfie com óculos
    "/images/foto10.jpeg", // Selfie com fundo verde
    "/images/foto11.jpeg", // Selfie com boné Nike
    "/images/foto12.jpeg", // Selfie no espelho com gestos
    "/images/foto13.jpeg", // Selfie com óculos futuristas
    "/images/foto14.jpeg", // Selfie no restaurante com tablet
    "/images/foto15.jpeg", // Selfie no restaurante com caretas
    "/images/foto16.jpeg", // Selfie com tatuagem e colar
    "/images/foto17.jpeg", // Selfie no espelho com coração
    "/images/foto18.jpeg", // Selfie com beijinho
    "/images/foto19.jpeg", // Selfie na cama com bíceps
    "/images/foto20.jpeg"  // Selfie íntima no espelho
  ];

  const toggleCard = (index) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const startDate = new Date('2024-09-09T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate.getTime();

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="title">Mariana e Tiago</h1>
        </header>
        
        <main className="main">
          <div className="countdown-section">
            <h2 className="countdown-title">Tempo Juntos</h2>
            <div className="countdown-container">
              <div className="time-unit">
                <span className="time-number">{timeLeft.days}</span>
                <span className="time-label">Dias</span>
              </div>
              <div className="time-unit">
                <span className="time-number">{timeLeft.hours}</span>
                <span className="time-label">Horas</span>
              </div>
              <div className="time-unit">
                <span className="time-number">{timeLeft.minutes}</span>
                <span className="time-label">Minutos</span>
              </div>
              <div className="time-unit">
                <span className="time-number">{timeLeft.seconds}</span>
                <span className="time-label">Segundos</span>
              </div>
            </div>
            <p className="target-date">Desde 09 de Setembro de 2024 amando muito você ❤️</p>
          </div>

          <div className="photos-section">
            <h2 className="photos-title">Nossas Fotos</h2>
            <div className="polaroid-grid">
              {Array.from({ length: 20 }, (_, index) => (
                <div 
                  key={index} 
                  className={`polaroid-frame ${flippedCards.has(index) ? 'flipped' : ''}`}
                  onClick={() => toggleCard(index)}
                >
                  <div className="polaroid-card">
                    <div className="polaroid-front">
                      <div className="polaroid-photo">
                        {polaroidImages[index] ? (
                          <img 
                            src={polaroidImages[index]} 
                            alt={`Foto ${index + 1}`}
                            className="polaroid-image"
                          />
                        ) : (
                          <div className="photo-placeholder">
                            <span className="placeholder-text">Foto {index + 1}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="polaroid-back">
                      <div className="polaroid-text">
                        <p>{polaroidTexts[index]}</p>
                      </div>
                    </div>
                  </div>
                  <div className="polaroid-shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
