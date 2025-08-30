import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Importando o CSS
import logo from '../images/logo.png';

const Header = () => {

  const handleCambioClick = () => {
    navigate('/home'); // Navega para a página Home
    setTimeout(() => {
      const boxContainerRef = document.querySelector('.box-container'); // Selecione a seção
      if (boxContainerRef) {
        boxContainerRef.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente para a seção
      }
    }, 500); // Tempo para garantir que a navegação seja concluída
  };
  
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false); // Estado para o sidebar
  const [isDropdownVisible, setDropdownVisible] = useState(false); // Estado para o dropdown

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleButtonClick = (route) => {
    navigate(route);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna o sidebar
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const servicesDropdown = [
    { label: 'Câmbio de Moedas Estrangeiras', route: '/servico1' },
    { label: 'Câmbio Comercial', route: '/servico2' },
    { label: 'Seguro de Viagem', route: '/servico3' },
    { label: 'Chip Internacional', route: '/servico4' },
    { label: 'Pacote de Viagens', route: '/servico5' },
    { label: 'Western Union', route: '/servico6' },
    { label: 'Locação de Carros', route: '/servico7' },
  ];

  const buttonData = [
    { label: 'Sobre a Fortur', route: '/QuemSomos' },
    { label: 'Serviços', route: '/Services' },
    { label: 'Pacotes', route: '/Pacotes' },
    { label: 'Fale Conosco', route: '/FaleConosco' },
    { label: 'Blog', route: '/Blog' },
    { label: 'Câmbio Exchange', route: handleCambioClick },
  ];

  return (
    <>
<header id="header" className="header">
        <div className="left-section">
          <img
            src={logo}
            alt="Home"
            className="logo"
            onClick={handleHomeClick}
          />
        </div>
        <div className="right-section">
  {buttonData.map((button, index) => (
    button.label === 'Serviços' ? (
      <div
        key={index}
        className="dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="button">
          {button.label}
        </button>
        {isDropdownVisible && (
          <div className="dropdown-menu">
            {servicesDropdown.map((service, idx) => (
              <button
                key={idx}
                className="dropdown-item"
                onClick={() => handleButtonClick(service.route)}
              >
                {service.label}
              </button>
            ))}
          </div>
        )}
      </div>
    ) : (
      <button
        key={index}
        className="button"
        onClick={() => {
          if (button.label === 'Câmbio Exchange') {
            handleCambioClick(); // Chama a função para Câmbio Exchange
          } else {
            handleButtonClick(button.route); // Para outros botões
          }
        }}
      >
        {button.label}
      </button>
    )
  ))}
</div>

        

        {/* Botão hambúrguer que só aparece em telas menores que 1521px */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          &#9776; {/* Ícone de três tracinhos */}
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? 'open' : 'hidden'}`}>
        <div className="sid-sup">
          <button className="close-sidebar" onClick={toggleMenu}>
            &times; {/* Ícone de fechar */}
          </button>
          <span className="menu-text">Menu</span>
        </div>
        {buttonData.map((button, index) => (
          <div key={index}>
            {button.label === 'Serviços' ? (
              <div className="dropdown">
                <button className="button">
                  {button.label}
                </button>
                <div className="dropdown-menu">
                  {servicesDropdown.map((service, idx) => (
                    <button
                      key={idx}
                      className="dropdown-item"
                      onClick={() => handleButtonClick(service.route)}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>
            ) :button.label === 'Câmbio Exchange' ? ( // Modificação aqui
              <button
                key={index}
                className="button"
                onClick={handleCambioClick} // Chame a função aqui
              >
                {button.label}
              </button>
            ) : (
              <button
                className="button"
                onClick={() => handleButtonClick(button.route)}
              >
                {button.label}
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;




