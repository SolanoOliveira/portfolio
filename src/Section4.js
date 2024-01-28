import { FaReact } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAndroid } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import foto from './imagens/imagem_vagas.png';

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

const ImageCard = () => {
  return (
    <div className="image-container" style={{ width: '100%', height: '315px' }}>
      <img src={foto} alt="Project Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

const ProjectCard = ({ title, content, icons, videoSrc, projectLink, useImage }) => {
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
    textDecoration: 'none',
    color: 'inherit',
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
      <a href={projectLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={cardStyle}>
          {useImage ? <ImageCard /> : <VideoCard videoSrc={videoSrc} />}
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
      </a>
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

  const icons1 = [<FaReact />, <SiMicrosoftazure />, <FaDocker />, <IoLogoJavascript />, <BiLogoTypescript />];
  const icons2 = [<FaAndroid />, <FaMicrochip />, <SiArduino />];
  const icons3 = [<FaReact />, <SiExpress />, <SiMui />, <BiLogoTypescript />];

  const videoSrc1 = "https://www.youtube.com/embed/_5_yIzW6gaY?autoplay=1&controls=1&loop=1";
  const videoSrc2 = "https://youtube.com/embed/KBYk6htirsQ";
  const videoSrc3 = "https://www.loom.com/embed/933fa13da2cc4b7bb9e455b22bf36f94?sid=0d5631d9-ea54-4f5b-b9d4-7e918ed95d6d";

  const projectLink1 = "https://github.com/SolanoOliveira/gpd-plannig-tool";
  const projectLink2 = "https://github.com/SolanoOliveira/devtitans";
  const projectLink3 = "https://github.com/SolanoOliveira/Junior-hero";

  return (
    <section id="section4" style={sectionStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <ProjectCard
            title="GPD planning tool"
            content="No projeto de conclusão do curso na Webacademy, tive a oportunidade de colaborar com uma equipe talentosa no desenvolvimento de uma solução inovadora para a Motorola. O desafio era criar um software web avançado, com o objetivo de otimizar significativamente o processo de desenvolvimento de produtos internos da empresa. Esse projeto não só demonstrou nossa capacidade de trabalhar em conjunto para atender às necessidades específicas de um cliente renomado, mas também refletiu nosso compromisso em fornecer soluções tecnológicas que trazem melhorias tangíveis e eficientes no ambiente corporativo."
            icons={icons1}
            videoSrc={videoSrc1}
            projectLink={projectLink1}
          />
          <ProjectCard
            title="Xgate"
            content="Neste projeto, inovamos com o desenvolvimento de um portão automático operado via radiofrequência de 433MHz. A programação foi realizada utilizando a linguagem C, conhecida por sua eficiência e confiabilidade. Para a execução, selecionamos microcontroladores ESP32, que se destacam pela sua versatilidade e capacidade de integração. Além disso, realizamos uma conexão direta com o sistema Android, proporcionando uma interface amigável e de fácil uso para o controle do portão. Esse projeto representa um avanço significativo no campo do controle automático residencial."
            icons={icons2}
            videoSrc={videoSrc2}
            projectLink={projectLink2}
          />
          <ProjectCard
            title="Junior hero"
            content="Este projeto é uma aplicação composta por duas componentes fundamentais: o backend e o frontend. Sua principal função é auxiliar na gestão de candidaturas a vagas de desenvolvimento de software. Utilizo este projeto como referência para meus trabalhos mais significativos, oferecendo um modelo eficiente e organizado para o acompanhamento e administração de processos de seleção na área de desenvolvimento."
            icons={icons3}
            videoSrc={videoSrc3} // Use o novo link do vídeo aqui
            projectLink={projectLink3}
            useImage={false} // Mude para false para usar o vídeo
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
