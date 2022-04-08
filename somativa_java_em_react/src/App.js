import './apps.css/App.css'
import Header from './components.js/header';
import Nav from './components.js/nav';
import Juros_simples from './juros.js/Juros.js';
import Auxilio from './auxilio.js/Auxilio.js';
import ValidarCPF from './validarCPF.js/validarCPF.js';
import Imposto from './imposto.js/Imposto.js';

function App() {

  return (
    <div id="main_div">
      <span id='topo'></span> <span id='0'></span>
        <Header/>
        <Nav text={['Início', 'Juros simples', 'Juros compostos', 'Auxílio', 'Validar CPF', "Imposto de renda"]}/>
        <Juros_simples tipo='simples'/>
        <Juros_simples tipo='composto'/>
        <Auxilio/>
        <ValidarCPF/>
        <Imposto/>
       </div>
    
  );
}

export default App;
