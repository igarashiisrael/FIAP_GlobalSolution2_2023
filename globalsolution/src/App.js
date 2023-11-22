/* Cores: Azul: 0E3746
          Bege: EAE8DC
          Branco: F4F2EC
          Vermelho: BE2623 
*/
import './css/style.css'
import Header from './components/Header';
import Banner from './img/saude.png';

function App() {
  return (
    <>
    
      <Header/>
      <img class="banner" src={Banner}/>

    </>
  );
}

export default App;
