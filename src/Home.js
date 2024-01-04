import React, { useState } from 'react';
import foto from './imagens/foto2.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useSpring, animated } from 'react-spring';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [isRotated, setIsRotated] = useState(false);
  const rotateAnimation = useSpring({
    transform: isRotated ? 'rotate(360deg)' : 'rotate(0deg)',
  });

  const handleImageClick = () => {
    setIsRotated(!isRotated);
  };

  AOS.init();

  return (
    <>
      <style>
        {`
        @keyframes gradient {
          0% { background-position: 0% }
          100% { background-position: 100% }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 40px;
          }
          div[data-aos="fade-right"] {
            font-size: 18px;
          }
          p[data-aos="fade-left"] {
            font-size: 16px;
          }
        }
      `}
      </style>
      <animated.section
        id="section1"
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          position: 'relative',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(90deg, #F0BCD4, #88CCF1, #E9E6AE)',
            backgroundSize: '300% 300%',
            animation: 'gradient 3s alternate infinite',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: -1,
          }}
        />
        <animated.img
          src={foto}
          alt="Profile"
          style={{
            maxWidth: '200px', // Diminuído o maxWidth
            border: '3px solid white',
            borderRadius: '50%',
            margin: '10px 0',
            cursor: 'pointer',
            ...rotateAnimation,
          }}
          onClick={handleImageClick}
        />
        <h2 data-aos="fade-up"
          style={{
            fontFamily: "'Sacramento', cursive",
            color: '#4d5057',
            fontSize: '60px',
            marginBottom: '4px',
          }}
        >
          Solano Lima Oliveira
        </h2>
        <div data-aos="fade-right"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: '700',
            fontSize: '24px',
            color: ' #4d5057',
            marginBottom: '20px',
          }}
        >
          Desenvolvedor fullstack
        </div>
        <p data-aos="fade-left"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: '20px',
            color: '#4d5057',
            lineHeight: '1.6',
            textAlign: 'center',
            maxWidth: '600px',
            marginBottom: '30px',
          }}
        >
          Como profissional, meu objetivo é usar a tecnologia para promover a inclusão
          em diversas áreas da sociedade. Acredito que a tecnologia tem o poder
          de superar barreiras e tornar o mundo mais acessível.
        </p>
        <div style={{ display: 'flex', alignItems: 'center' }} data-aos="fade-down">
          <a href="https://github.com/SolanoOliveira" target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
            <GitHubIcon style={{ fontSize: '60px', color: '#4d5057' }} />
          </a>
          <a href="https://www.linkedin.com/in/solano-lima-oliveira-146b23188" target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
            <LinkedInIcon style={{ fontSize: '60px', color: '#4d5057' }} />
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }} data-aos="fade-down">
          <a href="https://drive.google.com/file/d/1iB9-TUAeawFU-noCYQZCulfRdwdzTsdC/view?usp=drive_link" download="SeuCurriculo.pdf" style={{ textDecoration: 'none', marginTop: '20px' }}>
            <button style={{
              padding: '10px 20px',
              backgroundColor: ' #4d5057',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              color: 'white',
              fontSize: '16px',
              marginTop: '30px',
            }}>
              Baixar Currículo
            </button>
          </a>
        </div>

      </animated.section>
    </>
  );
};

export default Home;
