import React, { useState } from 'react';
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

    const [showContactForm, setShowContactForm] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const toggleContactForm = () => {
        setShowContactForm(!showContactForm);
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        const re = /^[1-9]{2}[9]{0,1}[1-9]{8}$/;
        return re.test(phone);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        if (!validatePhone(phone)) {
            alert('Por favor, insira um telefone válido.');
            return;
        }
        // Aqui você pode implementar o envio dos dados
        alert('Formulário enviado com sucesso!');
    };

    return (
        <>
            <img className="banner" src={Banner} alt="Banner" />

            <div className="pitch-box">
                <div className="texto-pitch">
                    <h3>SaudeApp</h3>
                    <p>Assista o vídeo Pitch deste nosso revolucionário Sotfware.</p>
                </div>
                <div className="video-pitch">
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/dTdMg8rID48?si=aWHo4xTGPlpP8nbO"></iframe>
                </div>
            </div>

            <div className="intro">
                <p className="intro-text">A solução inovadora do SaúdeApp está prestes a revolucionar a maneira como abordamos a saúde globalmente. Com uma gama diversificada de funcionalidades, o aplicativo oferece desde a virtualização de históricos médicos até agendamentos online, conectando-se diretamente com o Sistema Único de Saúde (SUS). <br></br><br></br>As próximas seções apresentam detalhadamente como essas ferramentas estão transformando e aprimorando o acesso e a gestão da saúde para todos os usuários.</p>
            </div>
            <div className="impar">
                <div className="impar-box">
                    <h2 className="impar-texto">Histórico de Vacinação Virtualizado:</h2>
                    <p className="impar-texto">Permite aos usuários acessar seus históricos de vacinação, identificando as vacinas necessárias e aquelas que ainda não foram tomadas, promovendo uma prevenção mais eficaz de doenças. Além disso, fornece informações detalhadas sobre as vacinas, incluindo funcionamento, origens e efeitos colaterais, visando a transparência e confiança dos usuários.</p>
                </div>
                <img className="vacina imagem" src={Vacina} alt="Vacina" />
            </div>
            <div className="par">
                <img className="exames imagem" src={Exames} alt="Exames" />
                <div className="par-box">
                    <h2 className="par-texto">Histórico de Exames Virtualizado:</h2>
                    <p className="par-texto">Armazena resultados de exames passados e atuais, facilitando o acesso tanto para os usuários quanto para os médicos. Reduz o uso de papel, promove a sustentabilidade e evita perdas de resultados, garantindo um controle mais eficiente da saúde pública.</p>
                </div>
            </div>
            <div className="impar">
                <div>
                    <h2 className="impar-texto">Setor Especializado para Bebês e Pessoas com Necessidades Especiais:</h2>
                    <p className="impar-texto">Oferece um espaço dedicado com informações, exames, vacinas e medicamentos necessários para esse grupo específico, proporcionando acesso rápido e facilitado para melhor assistência.</p>
                </div>
                <img className="crianca imagem" src={Crianca} alt="Criança" />
            </div>
            <div className="par">
                <img className="prontuario imagem" src={Prontuario} alt="Prontuario" />
                <div className="par-box">
                    <h2 className="par-texto">Conexão com o SUS e Prontuários:</h2>
                    <p className="par-texto">Integração do perfil pessoal do usuário com o Sistema Único de Saúde, automatizando informações médicas, orientações para tratamentos, vacinas e exames, simplificando o processo para os usuários.</p>
                </div>
            </div>
            <div className="impar">
                <div className="impar-box">
                    <h2 className="impar-texto">Agendamentos Online e Indicação de Serviços do SUS:</h2>
                    <p className="impar-texto">Possibilidade de agendar consultas e indicar os serviços disponíveis nos postos de saúde, evitando desperdício de tempo e fornecendo informações sobre horários e disponibilidade.</p>
                </div>
                <img className="agendamento imagem" src={Agendamento} alt="Agendamento Online" />
            </div>
            <div className="par">
                <img className="eventos imagem" src={Eventos} alt="Eventos" />
                <div className="par-box">
                    <h2 className="par-texto">Informações sobre Eventos e Ações Públicas de Saúde:</h2>
                    <p className="par-texto">Disponibilização de eventos relacionados à saúde pública para conscientização e engajamento dos usuários, fortalecendo a interação com a comunidade e a adesão a iniciativas de saúde.</p>
                </div>
            </div>
            <div className="impar">
                <div>
                    <h2 className="impar-texto">Melhoria na Experiência do Usuário com Busca e Interface Amigável:</h2>
                    <p className="impar-texto">Aprimoramento da interface do aplicativo, incluindo uma barra de busca para facilitar a navegação e a busca por funcionalidades, visando uma interação mais intuitiva e amigável.</p>
                </div>
                <img className="interface imagem" src={Interface} alt="Interface" />
            </div>

            <div className="integrantes">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">RM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Israel Igarashi</td>
                            <td>98359</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Leonardo Bernardes</td>
                            <td>99788</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td >Matheus Gouvêa</td>
                            <td >97774</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td >Ryan Aquino</td>
                            <td >550422</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Botão Fale Conosco com Bootstrap */}
            <div className="d-flex justify-content-center mt-4 mb-5">
                <button onClick={toggleContactForm} className="btn btn-primary">
                    Fale Conosco
                </button>
            </div>

            {/* Formulário de Contato com Bootstrap e espaçamento aprimorado */}
            {showContactForm && (
                <form onSubmit={handleSubmit} className="container mt-3 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="form-group mb-3"> {/* Adicionado mb-3 para margem inferior */}
                                <input type="text" className="form-control" placeholder="Assunto" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group mb-3">
                                <input type="tel" className="form-control" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="form-group mb-3"> {/* Adicionado mb-3 para margem inferior */}
                                <textarea className="form-control" placeholder="Mensagem"></textarea>
                            </div>
                            <button type="submit" className="btn btn-success ">Enviar</button>
                        </div>
                    </div>
                </form>
            )}


        </>
    );
}

export default HomePage;
