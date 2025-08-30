import React, { useState } from 'react';
import './FaleConosco.css';

const FaleConosco = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSendClick = async () => {
    // Regex para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido (ex: nome@dominio.com)');
      return;
    }

    setError(''); // Limpa a mensagem de erro

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        // Limpar os campos do formulário após o envio
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        throw new Error('Erro ao enviar a mensagem.');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {/* Div container */}
      <div className="containernner">
        <div className="loc">Onde estamos</div>
        <div className="enddd">
          Av. Almirante Barroso, 977B<br />
          Praia de Iracema
        </div>
        <div className="redss">Nossas redes</div>
        <div className="conttai">
          <button onClick={() => window.open('https://www.instagram.com', '_blank')}>
            <img src="instagram_logo.png" alt="Instagram" />
          </button>
          <button onClick={() => window.open('https://www.facebook.com', '_blank')}>
            <img src="facebook_logo.png" alt="Facebook" />
          </button>
          <button onClick={() => window.open('https://api.whatsapp.com/send?phone=55999999999', '_blank')}>
            <img src="whatsapp_logo.png" alt="WhatsApp" />
          </button>
        </div>
      </div>

      {/* Div superior com título, subtítulo e formulário */}
      <div className="superior">
        <h1>Fale com a Fortur</h1>
        <p>Nossa equipe está pronta para responder suas dúvidas e auxiliar na melhor forma possível.</p>
        {error && <div style={{ color: 'red' }}>{error}</div>} {/* Mensagem de erro */}
        <form>
          <input 
            type="text" 
            placeholder="Nome" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <input 
            type="tel" 
            placeholder="Telefone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required
          />
          <textarea 
            placeholder="Deixe sua mensagem" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required
          />
          <button type="button" onClick={handleSendClick}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default FaleConosco;





