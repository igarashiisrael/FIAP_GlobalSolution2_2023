import React from 'react';
import Banner from '../../img/saude.webp';
import './HomePage.css'

function HomePage() {
    return (
        <>
            <img className="banner" src={Banner} alt="Banner" />

            <div className="pitch-box">
                <div className="texto-pitch">
                    <h2>Vídeo do Pitch</h2>
                    <p>bla bla bla</p>
                </div>
                <div className="video-pitch">
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                </div>
            </div>

            <div class="intro">
                <p class="intro-text">A solução inovadora do SaúdeApp está prestes a revolucionar a maneira como abordamos a saúde globalmente. Com uma gama diversificada de funcionalidades, o aplicativo oferece desde a virtualização de históricos médicos até agendamentos online, conectando-se diretamente com o Sistema Único de Saúde (SUS). As próximas seções apresentam detalhadamente como essas ferramentas estão transformando e aprimorando o acesso e a gestão da saúde para todos os usuários.</p>
            </div>
            <div class="impar">
                <div>
                    <h2>Histórico de Vacinação Virtualizado:</h2>
                    <p>Permite aos usuários acessar seus históricos de vacinação, identificando as vacinas necessárias e aquelas que ainda não foram tomadas, promovendo uma prevenção mais eficaz de doenças. Além disso, fornece informações detalhadas sobre as vacinas, incluindo funcionamento, origens e efeitos colaterais, visando a transparência e confiança dos usuários.</p>
                </div>
            </div>
            <div class="par">
                <div>
                    <h2>Histórico de Exames Virtualizado:</h2>
                    <p>Armazena resultados de exames passados e atuais, facilitando o acesso tanto para os usuários quanto para os médicos. Reduz o uso de papel, promove a sustentabilidade e evita perdas de resultados, garantindo um controle mais eficiente da saúde pública.</p>
                </div>
            </div>
            <div class="impar">
                <div>
                    <h2>Setor Especializado para Bebês e Pessoas com Necessidades Especiais:</h2>
                    <p>Oferece um espaço dedicado com informações, exames, vacinas e medicamentos necessários para esse grupo específico, proporcionando acesso rápido e facilitado para melhor assistência.</p>
                </div>
            </div>
            <div class="par">
                <div>
                    <h2>Conexão com o SUS e Prontuários:</h2>
                    <p>Integração do perfil pessoal do usuário com o Sistema Único de Saúde, automatizando informações médicas, orientações para tratamentos, vacinas e exames, simplificando o processo para os usuários.</p>
                </div>
            </div>
            <div class="impar">
                <div>
                    <h2>Agendamentos Online e Indicação de Serviços do SUS:</h2>
                    <p>Possibilidade de agendar consultas e indicar os serviços disponíveis nos postos de saúde, evitando desperdício de tempo e fornecendo informações sobre horários e disponibilidade.</p>
                </div>
            </div>
            <div class="par">
                <div>
                    <h2>Informações sobre Eventos e Ações Públicas de Saúde:</h2>
                    <p>Disponibilização de eventos relacionados à saúde pública para conscientização e engajamento dos usuários, fortalecendo a interação com a comunidade e a adesão a iniciativas de saúde.</p>
                </div>
            </div>
            <div class="impar">
                <div>
                    <h2>Melhoria na Experiência do Usuário com Busca e Interface Amigável:</h2>
                    <p>Aprimoramento da interface do aplicativo, incluindo uma barra de busca para facilitar a navegação e a busca por funcionalidades, visando uma interação mais intuitiva e amigável.</p>
                </div>
            </div>

            
        </>
    );
}

export default HomePage;
