/* Cores: Azul: 0E3746
          Bege: EAE8DC
          Branco: F4F2EC
          Vermelho: BE2623 
*/
import './css/style.css';
import Header from './components/Header';
import Banner from './img/saude.webp';

function App() {
  return (
    <>
    
      <Header/>
      <img class="banner" src={Banner}/>

      <div class="pitch-box">
        <div class="texto-pitch">
          <h2>Vídeo do Pitch</h2>
          <p>bla bla bla</p>
        </div>
        <div class="video-pitch">
        <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
      </div>

    </>
  );
}

export default App;
