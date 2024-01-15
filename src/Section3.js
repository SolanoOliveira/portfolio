import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section3 = () => {
  const sectionStyle = {
    minHeight: '100vh', // Defina a altura mínima como 100vh (altura da tela)
    backgroundColor: '#b4f0ad',
    color: '#4d5057',
    padding: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    textAlign: 'left',
    animation: 'float 3s ease-in-out infinite',
  };

  const titleStyle = {
    fontFamily: 'Roboto Mono, monospace',
    fontWeight: '700',
    fontSize: '32px',
    marginBottom: '20px',
    borderBottom: '2px solid white',
    paddingBottom: '10px',
  };

  const contentStyle = {
    fontSize: '18px',
    margin: '10px 0',
  };

  const languageCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    textAlign: 'left',
    animation: 'float 3s ease-in-out infinite',
  };

  const languageTitleStyle = {
    fontFamily: 'Roboto Mono, monospace',
    fontWeight: '700',
    fontSize: '24px',
    marginBottom: '20px',
    borderBottom: '2px solid white',
    paddingBottom: '10px',
  };

  const languageContentStyle = {
    fontSize: '18px',
    margin: '10px 0',
  };

  AOS.init();

  return (
    <section id="section3" style={sectionStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div style={cardStyle} data-aos="zoom-in">
              <h2 style={titleStyle}>Minha Jornada:</h2>
              <ul>
              <li style={contentStyle}>🎓 Graduando em Ciência da Computação na UFAM</li>
                <li style={contentStyle}>💻 Técnico em Informática pela FUCAPI</li>
                <li style={contentStyle}>🛠️ Técnico em Manutenção de Computadores pelo SENAI</li>
                <li style={contentStyle}>
                  📱 Devtitans na Motorola - Desenvolvimento de Android embarcados e integração em microcontroladores.
                </li>
                <li style={contentStyle}>
                  🚀 Projeto Super na Samsung - Participação em pesquisa em engenharia de software e HCI (Interação Humano-Computador).
                </li>
                <li style={contentStyle}>
                  🌐 Webacademy na Motorola - Aprendizado de tecnologias web e desenvolvimento de projetos para a Motorola.
                </li>
                <li style={contentStyle}>
                  📚 PET - Programa de Educação Tutorial - Trabalho de extensão e desenvolvimento de soluções para alunos da UFAM.
                </li>
                <li style={contentStyle}>
                  👨‍🏫 Atuação como professor de programação no Centro Acadêmico de Ciência da Computação.
                </li>
                <li style={contentStyle}>
                  🏢 Estágio no Instituto Eldorado - Área de modem.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div style={cardStyle} data-aos="zoom-in">
              <h2 style={titleStyle}>Minhas Publicações:</h2>
              <ul>
                <li style={contentStyle}>
                  <p>
                    "To the Next Level! an Exploratory Study on the Influence of User Experience on the Acceptance
                    of a Gamified Learning Platform" - Avaliação de uma plataforma de aprendizagem gamificada, destacando a importância da experiência do usuário e da usabilidade na aceitação e sucesso educacional.
                  </p>
                </li>
                <li style={contentStyle}>
                  <p>
                    "UXNator: A Tool for Recommending UX Evaluation Methods" - Apresentação do UXNator, uma ferramenta que recomenda métodos de avaliação de UX com base em critérios coletados, visando facilitar a escolha de estratégias de avaliação pertinentes.
                  </p>
                </li>
                {/* ... Outros itens da lista */}
              </ul>
            </div>
            
            <div style={languageCardStyle} data-aos="zoom-in">
              <h2 style={languageTitleStyle}>Idiomas:</h2>
              <ul>
                <li style={languageContentStyle}>Inglês avançado</li>
                <li style={languageContentStyle}>Alemão iniciante</li>
                <li style={languageContentStyle}>Libras-português iniciante</li>
                {/* ... Outros idiomas */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
