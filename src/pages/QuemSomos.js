import React, { useState, useEffect } from 'react';
import './QuemSomos.css'; // Certifique-se de criar este arquivo para as estilizações
import img from '../images/duna.jpg';

const QuemSomos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img, img, img]; // Crie um array com as referências das imagens
  const [isManualChange, setIsManualChange] = useState(false); // Novo estado para controlar a mudança manual

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    if (isManualChange) {
      clearInterval(interval); // Limpa o intervalo se for uma mudança manual
      const manualInterval = setTimeout(() => {
        setIsManualChange(false); // Restaura o estado após 2000 ms
      }, 2000);
      return () => clearTimeout(manualInterval); // Limpa o timeout se o componente desmontar
    }

    return () => clearInterval(interval); // Limpa o intervalo padrão
  }, [images.length, isManualChange]);

  // Função para mudar o índice da imagem quando uma bolinha é clicada
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsManualChange(true); // Define que a mudança foi manual
  };

  return (
    <div className="container">
      <h1>Quem Somos</h1>
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)} // Adicione o evento de clique
            style={{ cursor: 'pointer' }} // Adiciona o pointer na bolinha
          ></span>
        ))}
      </div>
      <p className="lorem-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla nec elit at nulla dictum vehicula non sit amet urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur venenatis, elit sit amet gravida porttitor, velit nibh dictum felis, ut tincidunt orci risus sit amet neque. Donec dignissim, est in dignissim tempor, orci quam vestibulum est, sit amet aliquet risus velit vitae tortor. Proin fringilla quam sed dolor tempus, sit amet facilisis ante vulputate. Curabitur ornare dui ut libero consectetur, vel cursus lorem tincidunt. Nulla lobortis dolor ut ligula dapibus efficitur. Pellentesque rutrum eros vitae orci faucibus, id convallis eros eleifend. Phasellus convallis arcu nec magna sodales, ac tincidunt dui accumsan. Nullam consectetur, risus at efficitur volutpat, mauris felis vehicula eros, ac vehicula ipsum libero a mi. Maecenas fermentum nunc sit amet massa pretium pharetra. Praesent dapibus vehicula justo, nec pretium magna. Cras sit amet nisi velit.
      </p>
    </div>
  );
};

export default QuemSomos;




