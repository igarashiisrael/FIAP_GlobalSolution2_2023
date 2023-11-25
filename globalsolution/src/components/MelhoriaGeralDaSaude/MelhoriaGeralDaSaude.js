import Hero from '../../img/melhorias.png'
import './MelhoriaGeralDaSaude.css'
function MelhoriaGeralDaSaude() {
    function abrirPesquisa() {
        const url = "https://www.google.com/search?q=Quais+são+as+principais+melhorias+na+área+da+saúde";
        window.open(url, '_blank');
    }


    return (
        <div>
            <section className="hero-image3">
                <img src={Hero} className="img-fluid" alt="Hero" />
            </section>

            <section className="features fundo-melhorias  py-5">
                <div className="container">
                    <h2 className="text-center">Melhoria Geral da Saúde (Principalmente no Brasil)</h2>
                </div>
                <div className="container">
                    <div className="row text-center mt-4">
                        <div className="col-4">
                            <div className="feature">
                                <p>Nosso plano inicial é no Brasil, mas é um sistema ambientado e conectado tão forte que no futuro pode ser que cresça e se abranja para outros países, o importante é começar com um escopo menor e atingir o objetivo, porém as mudanças são coisas imparáveis, basta irmos para as mudanças boas, ou deixar que as mudanças ruins nos aflijam.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feature">
                                <p> Nosso plano se conecta com o plano da ODS: Engloba diversas metas, como prevenção do abuso de substâncias, redução de acidentes de trânsito, acesso universal a serviços de saúde sexual e reprodutiva, redução de mortes por produtos químicos perigosos e poluição.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feature">
                                <p>Há já vários projetos sendo desenvolvidos para o melhoramento da saúde e automação, estamos começando uma era de inteligências artificiais, e um uso melhorado e mais sistemático de sistemas virtuais, além da acessibilidade e facilidade do uso de sistemas movidos a internet e de fácil comunicação e conexão. É o momento perfeito para novos métodos de trabalhos integrados a tecnologia e também para projetos e ideias de ambientação virtual, integração e conexão emaranhados para fins de eficiência.</p>
                            </div>
                        </div>
                        <div className='col-12'>
                            <h5>Nosso projeto visa resolver vários problemas, porém além disso há de evidenciar os problemas da saúde geral no Brasil, para apresentar o porquê de nosso projeto:</h5>
                        </div>

                    </div>
                </div>
            </section>

            <section className="primary-content py-5">
                <div className="container">
                    <h2 className="text-center">Gestão ineficiente</h2>
                    <p className="text-center">O modelo descentralizado do SUS tem seus prós e contras.A gestão participativa está entre os pontos positivos, enquanto o desafio para monitorar e distribuir as receitas fica entre os negativos. Nesse cenário, ficam evidentes fatores como a administração deficiente, que contribui para a grande desigualdade na oferta dos serviços. Para corrigir essa falha, é essencial o cuidado na seleção dos gestores de instituições públicas de saúde, além da maior integração das esferas federal, municipal e estadual.</p>
                </div>
            </section>

            <section className="secondary-content fundo-melhorias py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="secondary">
                                <h3>Verba escassa</h3>
                                <p>Mencionei acima que o país destina somente 10,5% do PIB, sendo que apenas 4% ficam para a saúde pública, responsável pela assistência de mais de 70% dos brasileiros.
                                    Como reflexo, a média per capita gasta com a saúde dos brasileiros é 30% inferior à global.
                                    Esse fator limita o investimento em áreas estratégicas como a assistência primária, que seria capaz de resolver cerca de 80% das demandas de saúde.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="secondary">
                                <h3>Longas filas de espera</h3>
                                <p>Uma pesquisa divulgada pelo Conselho Nacional de Medicina e Instituto Datafolha em 2018 revelou que o longo tempo de espera é uma das maiores razões de insatisfação por parte de usuários do SUS.
                                    Tanto que 30% dos respondentes afirmaram ter aguardado mais de um ano para receber atendimento.
                                    Problemas com o fluxo, triagem e informações disponibilizadas para a população estão por trás das filas imensas, que contribuem para o agravo de doenças e sintomas.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="secondary">
                                <h3>Superlotação de hospitais</h3>
                                <p>Junto à má gestão de recursos, a escassez de programas de orientação aos pacientes também colabora para a superlotação de hospitais.
                                    Essa situação caótica acontece quando a necessidade identificada de serviços de emergência supera os recursos disponíveis na unidade de saúde.
                                    Muitas vezes, pessoas que desejam atendimento rápido acabam se dirigindo diretamente ao pronto socorro, quando o ideal seria que fossem até um posto de saúde.
                                    Assim, os serviços de emergência ficam sobrecarregados com casos leves, atrapalhando a triagem e seleção de casos prioritários.
                                    Além de atrasar a avaliação de todos os doentes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="secondary-content py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="secondary">
                                <h3>Falta de leitos</h3>
                                <p>O contexto que descrevi acima contribui para a falta de leitos nos hospitais brasileiros, mas não é o único motivo.
                                    A demanda por equipamentos necessários para setores como as Unidades de Terapia Intensiva (UTI) e problemas administrativos também respondem por esse drama.
                                    Essas questões fazem com o que o país perca leitos necessários para uma assistência de qualidade, como alertou o levantamento da Confederação Nacional dos Municípios (CNM).
                                    O estudo revelou que o Brasil havia perdido 40 mil leitos entre 2008 e 2018, sendo 23 mil deles em entidades públicas.

                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="secondary">
                                <h3>Desigualdade na distribuição de médicos</h3>
                                <p>Dados da Demografia Médica 2020, realizada em parceria entre Universidade de São Paulo (USP) e CFM, atestam grandes desigualdades na distribuição de médicos pelo Brasil.
                                    Enquanto a razão média nacional é de 2,27 médicos por mil habitantes, a região Norte apresenta taxa de 1,30, e a Sudeste, taxa de 3,15.
                                    As disparidades aparecem nas comparações entre regiões, estados e até entre capitais e municípios do interior dentro de uma mesma unidade federativa.
                                    Para se ter uma ideia, a cidade que registra a maior quantidade de médicos por habitante no país, Vitória/ES, conta com a razão de 13,71 profissionais por mil habitantes.
                                    Já no interior do próprio estado do Espírito Santo, a razão média cai para 1,67.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="secondary">
                                <h3>Despreparo dos profissionais</h3>
                                <p>Além da falta de mão de obra, a saúde pública ainda sofre com a falta de profissionais capacitados para a assistência.
                                    O crescimento da demanda pelos cuidados com doenças crônicas, salários baixos e cursos de qualidade questionável estão no cerne desse problema.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="call-to-action bg-warning py-5 text-center">
                <h2>Explore Melhorias na Saúde</h2>
                <p>Quais são as principais melhorias na área da saúde?</p>
                <button className="btn btn-lg btn-secondary" onClick={abrirPesquisa}>Saiba Mais</button>
            </section>

        </div>
    );
}
export default MelhoriaGeralDaSaude;