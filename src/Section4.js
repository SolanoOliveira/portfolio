import { FaReact } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAndroid } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";
import { SiArduino } from "react-icons/si";

const VideoCard = ({ videoSrc }) => {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="315"
        src={videoSrc}
        title="Vídeo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const ProjectCard = ({ title, content, icons, videoSrc }) => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontFamily: 'Roboto Mono, monospace',
    fontWeight: '700',
    fontSize: '24px',
    marginBottom: '10px',
    textDecoration: 'none', // Removendo sublinhado
  };

  const contentStyle = {
    fontSize: '18px',
    marginBottom: '10px',
  };

  const iconStyle = {
    fontSize: '40px',
    margin: '10px',
  };

  return (
    <div className="col-lg-6">
      <div style={cardStyle}>
        <VideoCard videoSrc={videoSrc} />
        <div>
          {icons.map((icon, index) => (
            <span key={index} style={iconStyle}>
              {icon}
            </span>
          ))}
        </div>
        <h1 style={titleStyle}>{title}</h1>
        <p style={contentStyle}>{content}</p>
      </div>
    </div>
  );
};

const Section4 = () => {
  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#add8e6',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#4d5057',
    padding: '20px',
  };

  const icons1 = [<FaReact />, <SiMicrosoftazure />, <FaDocker />, <IoLogoJavascript />];
  const icons2 = [<FaAndroid />, <FaMicrochip />, <SiArduino />];

  const videoSrc1 = "https://www.youtube.com/embed/_5_yIzW6gaY?autoplay=1&controls=1&loop=1";
  const videoSrc2 = "https://youtube.com/embed/KBYk6htirsQ";

  return (
    <section id="section4" style={sectionStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <ProjectCard
            title="GPD planning tool"
            content="Neste projeto final do curso Webacademy, colaborei em equipe para desenvolver uma solução real para a Motorola. Nosso objetivo foi criar um software web que aprimorasse significativamente o processo de desenvolvimento de produtos internos da empresa."
            icons={icons1}
            videoSrc={videoSrc1}
          />
          <ProjectCard
            title="Xgate"
            content="Neste projeto, desenvolvemos um portão automático usando radiofrequência de 433MHz e utilizamos a linguagem C. Para a implementação, optamos por microcontroladores ESP32 com integração ao sistema Android."
            icons={icons2}
            videoSrc={videoSrc2}
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
