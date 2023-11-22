import React, { useState, useEffect } from 'react';
import htmlIcon from './icones/html.png';
import cssIcon from './icones/css.png';
import javaIcon from './icones/javascript.png';
import bootstrapIcon from './icones/bootstrap.png';
import bdIcon from './icones/bd.png';
import expressIcon from './icones/express.png';
import gitIcon from './icones/git.png';
import nodeIcon from './icones/node.png';
import reactIcon from './icones/react.png';
import typeIcon from './icones/type.png';
import UIIcon from './icones/UI.png';
import UXIcon from './icones/UX.png';
import androidIcon from './icones/android.png';
import arduinoIcon from './icones/arduino.png';
import cIcon from './icones/c.png';
import pythonIcon from './icones/python.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#4d5057',
    padding: '20px',
  };

  const iconStyle = {
    width: windowWidth <= 768 ? '50px' : '100px',
    height: windowWidth <= 768 ? '50px' : '100px',
    marginBottom: '10px',
  };

  const nameStyle = {
    fontFamily: 'Roboto Mono, monospace',
    color: '#4d5057',
    textAlign: 'center',
    marginBottom: '10px',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: windowWidth <= 768 ? '30px' : '50px',
  };

  const titleStyle = {
    fontFamily: "'Sacramento', cursive",
    color: '#4d5057',
    fontSize: '60px',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const columnClass = windowWidth <= 768 ? 'col-6' : 'col-md-3';

  const floatAnimation = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-5px); }
      100% { transform: translateY(0px); }
    }

    .float {
      animation: float 3s ease-in-out infinite;
    }

    .float:hover {
      transform: translateY(-2px);
    }
  `;

  AOS.init();

  return (
    <section id="section2" style={sectionStyle}>
      <style>{floatAnimation}</style>
      <div className="container">
        <div className="row" style={{ marginTop: '30px' }}>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={htmlIcon} alt="HTML Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>HTML</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={cssIcon} alt="CSS Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>CSS</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={javaIcon} alt="JavaScript Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>JavaScript</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={bootstrapIcon} alt="Bootstrap Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>Bootstrap</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={bdIcon} alt="Database Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>Database</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={expressIcon} alt="Express Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>Express</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={gitIcon} alt="Git Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>Git</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={nodeIcon} alt="Node.js Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>Node.js</span>
          </div>
        </div>
        <div className="row" style={{ marginTop: '20px' }}>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={reactIcon} alt="React Icon" style={iconStyle} data-aos="zoom-in" />
            <span style={nameStyle}>React</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={typeIcon} alt="TypeScript Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>TypeScript</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={UIIcon} alt="UI Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>UI</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={UXIcon} alt="UX Icon" style={iconStyle} data-aos="zoom-in" />
            <span style={nameStyle}>UX</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={androidIcon} alt="Android Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>Android</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={arduinoIcon} alt="Arduino Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>Arduino</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={cIcon} alt="C Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>C</span>
          </div>
          <div className={`${columnClass} float`} style={columnStyle}>
            <img src={pythonIcon} alt="Python Icon" style={iconStyle} data-aos="zoom-in"/>
            <span style={nameStyle}>Python</span>
          </div>
          {/* Adicione mais ícones da mesma maneira */}
        </div>
      </div>
    </section>
  );
};

export default Section2;
