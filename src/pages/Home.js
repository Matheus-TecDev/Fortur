import React, { useState, useRef } from 'react';
import './Home.css'; // Importando o CSS para estilização

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const boxContainerRef = useRef(null); // Criar um ref

  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDoubt = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const duvidas = [
    { id: 1, texto: 'Dúvida 1', conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...' },
    { id: 2, texto: 'Dúvida 2', conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...' },
    { id: 3, texto: 'Dúvida 3', conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...' },
    { id: 4, texto: 'Dúvida 4', conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...' },
    { id: 5, texto: 'Dúvida 5', conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...' },
    { id: 6, texto: 'Dúvida 6', conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...' },
    { id: 7, texto: 'Dúvida 7', conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...' },
    { id: 8, texto: 'Dúvida 8', conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...' },
  ];

  const buttons = [
    { label: 'Destino 1', image: 'path_to_image1.png', route: '/destino1' },
    { label: 'Destino 2', image: 'path_to_image2.png', route: '/destino2' },
    { label: 'Destino 3', image: 'path_to_image3.png', route: '/destino3' },
    { label: 'Destino 4', image: 'path_to_image4.png', route: '/destino4' },
    { label: 'Destino 5', image: 'path_to_image5.png', route: '/destino5' },
    { label: 'Destino 6', image: 'path_to_image6.png', route: '/destino6' },
    { label: 'Destino 7', image: 'path_to_image7.png', route: '/destino7' }
  ];

  const moedas = [
    { nome: 'Dólar Americano', unidade: 'USD', imagem: 'path/to/usd-image.png', compra: 'R$ 5,55', venda: 'R$ 5,80' },
    { nome: 'Dólar Neozelandês', unidade: 'NZD', imagem: 'path/to/nzd-image.png', compra: 'R$ 2,90', venda: 'R$ 3,50' },
    { nome: 'Libra Esterlina', unidade: 'GBP', imagem: 'path/to/gbp-image.png', compra: 'R$ 6,70', venda: 'R$ 7,50' },
    { nome: 'Franco Suíço', unidade: 'CHF', imagem: 'path/to/chf-image.png', compra: 'R$ 5,50', venda: 'R$ 6,00' },
    { nome: 'Dólar Canadense', unidade: 'CAD', imagem: 'path/to/cad-image.png', compra: 'R$ 3,80', venda: 'R$ 4,20' },
    { nome: 'Dólar Australiano', unidade: 'AUD', imagem: 'path/to/aud-image.png', compra: 'R$ 2,00', venda: 'R$ 4,65' },
    { nome: 'Euro', unidade: 'EUR', imagem: 'path/to/euro-image.png', compra: 'R$ 6,05', venda: 'R$ 6,30' },
    { nome: 'Peso Argentino', unidade: 'ARS', imagem: 'path/to/ars-image.png', compra: 'R$ 0,004', venda: 'R$ 0,008' },
    { nome: 'Peso Chileno', unidade: 'CLP', imagem: 'path/to/clp-image.png', compra: 'R$ 0,003', venda: 'R$ 0,008' },
    { nome: 'Peso Mexicano', unidade: 'MXN', imagem: 'path/to/mxn-image.png', compra: 'R$ 0,15', venda: 'R$ 0,30' },
    { nome: 'Peso Colombiano', unidade: 'COP', imagem: 'path/to/cop-image.png', compra: 'R$ 0,003', venda: 'R$ 0,0020' },
    { nome: 'Iene', unidade: 'JPY', imagem: 'path/to/yen-image.png', compra: 'R$ 0,045', venda: 'R$ 0,046' },
  ];

  const viagens = [
    {
      title: 'Aventura no Deserto',
      description: 'Explore as dunas douradas em uma experiência inesquecível pelo deserto.',
      image: 'path_to_desert_image.png',
      route: '/viagem-deserto'
    },
    {
      title: 'Paraíso Tropical',
      description: 'Relaxe em praias paradisíacas e descubra a beleza tropical do nosso destino.',
      image: 'path_to_tropical_image.png',
      route: '/viagem-tropical'
    }
  ];


  const destinos = [
    {
      nome: 'Aventura no Deserto',
      titulo: 'Exploração das Dunas',
      descricao: 'Aventure-se nas dunas douradas e viva uma experiência única no deserto.',
      rota: '/deserto-aventura'
    },
    {
      nome: 'Paraíso Tropical',
      titulo: 'Relaxamento em Praias Paradisíacas',
      descricao: 'Desfrute de dias ensolarados em praias de águas cristalinas.',
      rota: '/tropical-paraiso'
    },
    {
      nome: 'Montanhas Neve & Ski',
      titulo: 'Esportes de Inverno',
      descricao: 'Viva momentos emocionantes nas montanhas nevadas com opções de esqui.',
      rota: '/montanha-neve-ski'
    },
    {
      nome: 'Aventura Urbana',
      titulo: 'Explorando Grandes Cidades',
      descricao: 'Descubra as atrações urbanas em cidades vibrantes pelo mundo.',
      rota: '/aventura-urbana'
    }
  ];
  return (
    <div className="home-container">
      <div ref={boxContainerRef} className="box-container">
        <h1 className="header-title">Cotações - Taxas de Câmbio</h1>
        <h2 className="date-title">Cotações do dia 9 de Outubro de 2024</h2>
        <p className="obs-text">OBS: Cotações sujeitas a alterações sem prévio aviso.</p>
        <table id="currency-table" className="currency-table">
          <thead>
            <tr>
              <th>Moeda</th>
              <th>Compra</th>
              <th>Venda</th>
            </tr>
          </thead>
          <tbody>
            {moedas.map((moeda, index) => (
              <tr key={index}>
                <td>
                  <div className="currency-container">
                    <img src={moeda.imagem} alt={moeda.nome} className="currency-image" />
                    <div className="currency-name">{moeda.nome} ({moeda.unidade})</div>
                  </div>
                </td>
                <td>{moeda.compra}</td>
                <td>{moeda.venda}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="contact-button"
          onClick={() => window.open('https://web.whatsapp.com/send?phone=8596166664&text=', '_blank')}>
          Quero Entrar Em Contato
          <img src="path_to_icon.png" alt="WhatsApp" className="contact-icon" />
        </button>
      </div>
      <div className="method">
        <h2 className="method-title">Bem-vindo à Fortur</h2>
        <p className="method-text">Embarque em uma jornada única de descoberta e emoção ao redor do mundo. Nossa agência está aqui para transformar seus sonhos em realidade e oferecer experiências de viagem memoráveis, que ficarão gravadas em seu coração para sempre.</p>

        <div>
          <h2
            className="titulo-frase"
            onClick={() => document.getElementById('header').scrollIntoView({ behavior: 'smooth' })}
          >
            Descubra Destinos Inesquecíveis
          </h2>
          <div className="text-with-image" onClick={() => document.getElementById('header').scrollIntoView({ behavior: 'smooth' })}>
            <img src="path_to_first_image.png" alt="Descrição da imagem" className="side-image" />
            <p>Não deixe passar a oportunidade de embarcar em uma viagem inesquecível! Descubra novos destinos, explore culturas fascinantes e crie memórias que durarão para sempre. Reserve agora e comece sua aventura!</p>
          </div>

          <h2
            className="titulo-frase"
            onClick={() => document.getElementById('header').scrollIntoView({ behavior: 'smooth' })}
          >
            Mais Segurança Em Suas Viagens
          </h2>
          <div className="text-with-image" onClick={() => document.getElementById('header').scrollIntoView({ behavior: 'smooth' })}>
            <img src="path_to_second_image.png" alt="Descrição da imagem" className="side-image" />
            <p>Viajar com a gente é embarcar em uma jornada segura e confortável, onde cada detalhe é pensado para o seu bem-estar. Sinta a liberdade de explorar o mundo com tranquilidade e estilo!</p>
          </div>
        </div>
        <button
          className="contact-button"
          onClick={() => window.open('https://web.whatsapp.com/send?phone=8596166664&text=Ol%C3%A1,%20eu%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20pre%C3%A7os', '_blank')}>
          Quero Entrar Em Contato
          <img src="path_to_icon.png" alt="WhatsApp" className="contact-icon" />
        </button>
      </div>

      <div className="services-container">
        <h2 className="services-title">Principais Serviços</h2>
        <p className="services-subtitle">Conheça Os Principais Serviços Oferecidos Pela Fortur</p>

        <div className="butts">
          {buttons.map((button, index) => (
            <div
              key={index}
              className="buttton"
              onClick={() => navigate(button.route)}
            >
              <img src={button.image} alt={button.label} className="buttton-image" />
              <p>{button.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="viagens">
        <h2 className="viagens-title">Encontre a melhor viagem para você</h2>
        <div className="viagens-container">
          {viagens.map((viagem, index) => (
            <div key={index} className="viagem">
              <img src={viagem.image} alt={viagem.title} className="viagem-image" />
              <h3 className="viagem-title">{viagem.title}</h3>
              <p className="viagem-description">{viagem.description}</p>
              <button className="saiba-mais-button" onClick={() => navigate(viagem.route)}>
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="destinos-section">
        <h2 className="destinos-title">Escolha seu Próximo Destino</h2>
        <div className="destinos-container">
          {destinos.map((destino, index) => (
            <div key={index} className="destino-card">
              <img src={destino.imagem} alt={destino.nome} className="destino-imagem" />
              <h3 className="destino-nome">{destino.nome}</h3>
              <h4 className="destino-titulo">{destino.titulo}</h4>
              <p className="destino-descricao">{destino.descricao}</p>
              <button
                className="leia-mais-link"
                onClick={() => navigate(destino.rota)}
              >
                Leia Mais
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="duvidas-section">
      <h2 className="duvidas-title">Dúvidas</h2>
      <div className="duvidas-container">
        {duvidas.map((duvida, index) => (
          <div 
            key={duvida.id} 
            className="duv"
            onClick={() => toggleDoubt(index)} // Troca a seta e mostra/oculta o conteúdo
          >
            <div className="duv-content">
              <p>{duvida.texto}</p>
              <span className={`arrow ${activeIndex === index ? 'down' : 'right'}`}></span>
            </div>
            {activeIndex === index && (
              <div className="duv-text">{duvida.conteudo}</div>
            )}
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Home;
