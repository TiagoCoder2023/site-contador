import React, { useState, useEffect } from "react";
import "./App.css";

// Importar todas as imagens
import foto1 from "./images/foto1.jpeg";
import foto2 from "./images/foto2.jpeg";
import foto3 from "./images/foto3.jpeg";
import foto4 from "./images/foto4.jpeg";
import foto5 from "./images/foto5.jpeg";
import foto6 from "./images/foto6.jpeg";
import foto7 from "./images/foto7.jpeg";
import foto8 from "./images/foto8.jpeg";
import foto9 from "./images/foto9.jpeg";
import foto10 from "./images/foto10.jpeg";
import foto11 from "./images/foto11.jpeg";
import foto12 from "./images/foto12.jpeg";
import foto13 from "./images/foto13.jpeg";
import foto14 from "./images/foto14.jpeg";
import foto15 from "./images/foto15.jpeg";
import foto16 from "./images/foto16.jpeg";
import foto17 from "./images/foto17.jpeg";
import foto18 from "./images/foto18.jpeg";
import foto19 from "./images/foto19.jpeg";
import foto20 from "./images/foto20.jpeg";

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [flippedCards, setFlippedCards] = useState(new Set());
  const [isIOS, setIsIOS] = useState(false);
  const [orientation, setOrientation] = useState("portrait");

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
    "Pra sempre com você 💕",
  ];

  // Array de fotos - todas as 20 fotos completas
  const polaroidImages = [
    foto1, // Selfie no carro
    foto2, // Selfie no espelho
    foto3, // Selfie divertida com caretas
    foto4, // Selfie com blusa azul
    foto5, // Selfie noturna
    foto6, // Selfie com sorvete
    foto7, // Selfie com coração
    foto8, // Selfie na rua
    foto9, // Selfie com óculos
    foto10, // Selfie com fundo verde
    foto11, // Selfie com boné Nike
    foto12, // Selfie no espelho com gestos
    foto13, // Selfie com óculos futuristas
    foto14, // Selfie no restaurante com tablet
    foto15, // Selfie no restaurante com caretas
    foto16, // Selfie com tatuagem e colar
    foto17, // Selfie no espelho com coração
    foto18, // Selfie com beijinho
    foto19, // Selfie na cama com bíceps
    foto20, // Selfie íntima no espelho
  ];

  const toggleCard = (index) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Detectar iOS e orientação
  useEffect(() => {
    // Detectar se é iOS
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIOS(iOS);

    // Função para detectar orientação
    const handleOrientationChange = () => {
      if (window.innerHeight > window.innerWidth) {
        setOrientation("portrait");
      } else {
        setOrientation("landscape");
      }

      // Forçar re-renderização no iOS após mudança de orientação
      if (iOS) {
        setTimeout(() => {
          const polaroidCards = document.querySelectorAll(".polaroid-card");
          polaroidCards.forEach((card) => {
            card.style.transform = card.style.transform || "none";
          });
        }, 100);
      }
    };

    // Detectar orientação inicial
    handleOrientationChange();

    // Adicionar listener para mudanças de orientação
    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    const startDate = new Date("2024-09-09T00:00:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate.getTime();

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
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
            <p className="target-date">
              Desde 09 de Setembro de 2024 amando muito você ❤️
            </p>
          </div>

          <div className="photos-section">
            <h2 className="photos-title">Nossas Fotos</h2>
            <div className="polaroid-grid">
              {Array.from({ length: 20 }, (_, index) => (
                <div
                  key={index}
                  className={`polaroid-frame ${
                    flippedCards.has(index) ? "flipped" : ""
                  } ${isIOS ? "ios-device" : ""}`}
                  onClick={() => toggleCard(index)}
                >
                  <div className="polaroid-card">
                    <div className="polaroid-front">
                      <div className="polaroid-photo">
                        {polaroidImages[index] ? (
                          <img
                            src={polaroidImages[index]}
                            alt={`Foto ${index + 1}`}
                            className={`polaroid-image ${
                              isIOS && orientation === "landscape"
                                ? "ios-landscape-fix"
                                : ""
                            }`}
                          />
                        ) : (
                          <div className="photo-placeholder">
                            <span className="placeholder-text">
                              Foto {index + 1}
                            </span>
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
