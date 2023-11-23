import React from 'react';
import Banner from '../../img/saude.webp';
import Agendamento from '../../img/agendamento.png'
import Vacina from '../../img/vacina.png'
import Crianca from '../../img/crianca.png'
import Interface from '../../img/interface.png'
import Eventos from '../../img/eventos.png'
import Prontuario from '../../img/prontuario.png'
import Exames from '../../img/exames.png'
import './HomePage.css'

function HomePage() {
    return (
        <>
            <img className="banner" src={Banner} alt="Banner" />

            <div className="pitch-box">
                <div className="texto-pitch">
                    <h3>SaudeApp</h3>
                    <p>Assista o vídeo Pitch deste nosso revolucionário Sotfware.</p>
                </div>
                <div className="video-pitch">
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                </div>
            </div>

            <div class="intro">
                <p class="intro-text">A solução inovadora do SaúdeApp está prestes a revolucionar a maneira como abordamos a saúde globalmente. Com uma gama diversificada de funcionalidades, o aplicativo oferece desde a virtualização de históricos médicos até agendamentos online, conectando-se diretamente com o Sistema Único de Saúde (SUS). <br></br><br></br>As próximas seções apresentam detalhadamente como essas ferramentas estão transformando e aprimorando o acesso e a gestão da saúde para todos os usuários.</p>
            </div>
            <div class="impar">
                <div class="impar-box">
                    <h2 class="impar-texto">Histórico de Vacinação Virtualizado:</h2>
                    <p class="impar-texto">Permite aos usuários acessar seus históricos de vacinação, identificando as vacinas necessárias e aquelas que ainda não foram tomadas, promovendo uma prevenção mais eficaz de doenças. Além disso, fornece informações detalhadas sobre as vacinas, incluindo funcionamento, origens e efeitos colaterais, visando a transparência e confiança dos usuários.</p>
                </div>
                <img className="vacina imagem" src={Vacina} alt="Vacina" />
            </div>
            <div class="par">
                <img className="exames imagem" src={Exames} alt="Exames" />
                <div class="par-box">
                    <h2 class="par-texto">Histórico de Exames Virtualizado:</h2>
                    <p class="par-texto">Armazena resultados de exames passados e atuais, facilitando o acesso tanto para os usuários quanto para os médicos. Reduz o uso de papel, promove a sustentabilidade e evita perdas de resultados, garantindo um controle mais eficiente da saúde pública.</p>
                </div>
            </div>
            <div class="impar">
                <div>
                    <h2 class="impar-texto">Setor Especializado para Bebês e Pessoas com Necessidades Especiais:</h2>
                    <p class="impar-texto">Oferece um espaço dedicado com informações, exames, vacinas e medicamentos necessários para esse grupo específico, proporcionando acesso rápido e facilitado para melhor assistência.</p>
                </div>
                <img className="crianca imagem" src={Crianca} alt="Criança" />
            </div>
            <div class="par">
                <img className="prontuario imagem" src={Prontuario} alt="Prontuario" />
                <div class="par-box">
                    <h2 class="par-texto">Conexão com o SUS e Prontuários:</h2>
                    <p class="par-texto">Integração do perfil pessoal do usuário com o Sistema Único de Saúde, automatizando informações médicas, orientações para tratamentos, vacinas e exames, simplificando o processo para os usuários.</p>
                </div>
            </div>
            <div class="impar">
                <div class="impar-box">
                    <h2 class="impar-texto">Agendamentos Online e Indicação de Serviços do SUS:</h2>
                    <p class="impar-texto">Possibilidade de agendar consultas e indicar os serviços disponíveis nos postos de saúde, evitando desperdício de tempo e fornecendo informações sobre horários e disponibilidade.</p>
                </div>
                <img className="agendamento imagem" src={Agendamento} alt="Agendamento Online" />
            </div>
            <div class="par">
                <img className="eventos imagem" src={Eventos} alt="Eventos" />
                <div class="par-box">
                    <h2 class="par-texto">Informações sobre Eventos e Ações Públicas de Saúde:</h2>
                    <p class="par-texto">Disponibilização de eventos relacionados à saúde pública para conscientização e engajamento dos usuários, fortalecendo a interação com a comunidade e a adesão a iniciativas de saúde.</p>
                </div>
            </div>
            <div class="impar">
                <div>
                    <h2 class="impar-texto">Melhoria na Experiência do Usuário com Busca e Interface Amigável:</h2>
                    <p class="impar-texto">Aprimoramento da interface do aplicativo, incluindo uma barra de busca para facilitar a navegação e a busca por funcionalidades, visando uma interação mais intuitiva e amigável.</p>
                </div>
                <img className="interface imagem" src={Interface} alt="Interface" />
            </div>

            
        </>
    );
}

export default HomePage;
