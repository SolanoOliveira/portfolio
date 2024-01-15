import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Section2 from './Section2';
import Section3 from './Section3';
import Navbar from './Navbar';
import AnimatedCursor from "react-animated-cursor"
import Section4 from './Section4';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
      <Section2 />
      <Section3 />
      <Section4/>
      <AnimatedCursor
  innerSize={20}
  outerSize={30}
  color='77, 80, 87'
  outerAlpha={0.2}
  innerScale={0.9}
  outerScale={5}
  clickables={[
    'a',
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="submit"]',
    'input[type="image"]',
    'label[for]',
    'select',
    'textarea',
    'button',
    '.link'
  ]}
  outerStyle={{
    zIndex: 9999, // Defina um valor alto para z-index para manter o cursor à frente de outros elementos
    // Outros estilos personalizados, se necessário
  }}
/>
    </div>
  );
}

export default App;
