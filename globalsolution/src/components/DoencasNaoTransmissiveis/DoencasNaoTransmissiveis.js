import React from 'react';
import NonTransmissibleDiseasesImage from '../../../src/img/saude.webp'; // Certifique-se de que o caminho está correto
import DCNT from '../../img/dcnt.png'
import Plano from '../../img/plano.webp'
import Ods3 from '../../img/ods.jpg'

function DoencasNaoTransmissiveis() {
    return (
        <div>
            <section className="hero-section d-flex align-items-center justify-content-center">
                <img src={NonTransmissibleDiseasesImage} className="img-fluid" alt="Imagem representativa de Doenças Não Transmissíveis" />
            </section>

            <section className="features prevencao py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2">
                            <img src={DCNT} className="img-fluid" alt="Doenças Não Transmissíveis" />
                        </div>
                        <div className="col-md-6 order-md-1 text-center">
                            <h2>Doenças Não Transmissíveis</h2>
                            <p class="texto">O secretário de Vigilância em Saúde do Ministério da Saúde (SVS/MS), Arnaldo Medeiros, participou da abertura do evento e fez um panorama da situação desses agravos no Brasil. “As DCNTs matam cerca de 41 milhões de pessoas a cada ano, o equivalente a 71% de todas as mortes no mundo. 77% dessas mortes ocorrem em países de baixa e média renda. Por isso, é essencial que os órgãos competentes tenham um olhar de entendimento sobre essas doenças na lógica de uma vigilância eficaz, com foco no fortalecimento da Atenção Primária”, afirmou o secretário.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="primary-content py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center order-md-1">
                            <h2>Plano de Ações Estratégicas</h2>
                            <p class="texto">Durante o encontro, também foi lançado o Plano de Ações Estratégicas para o Enfrentamento das Doenças Crônicas e Agravos Não Transmissíveis (DCNT) no Brasil, 2021-2030. O Plano será uma importante ferramenta norteadora das ações e políticas de saúde para esses agravos, além de atualizar e renovar o compromisso do governo com a pauta até o final da próxima década. Na mesma oportunidade, foi divulgado o Relatório do Vigitel 2020 e foram apresentados os relatórios temáticos sobre a evolução do Vigitel 2006-2020.</p>
                            <p class="texto">Durante o lançamento das duas publicações, o secretário Arnaldo reforçou que “temos que ter informação oportuna e abrangente, para que possamos mensurar onde estamos e para onde estamos caminhando, por isso a Semana das DCNT é um dos eventos mais esperados na área da saúde, uma vez que trata sobre ações públicas efetivas para vigilância e enfrentamento de doenças e de fatores de risco que ceifam, a cada dia mais, vítimas dessas patologias e que são, em grande parte, passíveis de se prevenir e tratar”, disse.</p>
                        </div>
                        <div className="col-md-6 order-md-2">
                            <img src={Plano} className="img-fluid" alt="Estilos de Vida Saudáveis" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="secondary-content prevencao py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2">
                            <img src={Ods3} className="img-fluid" alt="Prevenção de Doenças Não Transmissíveis" />
                        </div>
                        <div className="col-md-6 order-md-1 text-center">
                            
                            <p class="texto">A coordenadora de Vigilância das Doenças e Agravos não Transmissíveis (CGDANT/SVS/MS), Patrícia Oliveira, afirmou que a pandemia de Covid-19 tornou as DCNT mais evidentes. “O ano de 2021 foi marcado pela Covid-19, e isso ressaltou ainda mais as ações de enfrentamento das DCNTs no Brasil e no mundo. O Plano de Ações Estratégicas para o enfrentamento destes agravos visa fortalecer a agenda e criar programas que sejam necessários para organizar esse trabalho. O planejamento dessas ações deve ser pensado para que possamos dar continuidade às ações”, explicou Patrícia.</p>
                            <p class="texto">Tão sério quanto as doenças transmissíveis, as doenças crônicas não transmissíveis e as não crônicas, elas representam grande parcela da mortalidade do mundo e é um problema sério a ser resolvido tanto dentro quanto fora do nosso país, por isso a ODS 3 se propões a: Meta 3.4: visa reduzir em um terço a mortalidade prematura por doenças não transmissíveis até 2030.</p>
                        </div>
                    </div>
                        <p class="texto texto-info">Outro problema que se têm algumas vezes por motivos evitáveis ou que a morte por essa causa é muitas vezes evitável, mas por conta da falta de gerenciamento e de automação as pessoas acabam pagando o preço. Nosso SaúdeApp entra nessa situação não apenas para solucionar, mas para fazer parte das vidas das pessoas.</p>
                </div>
            </section>

            <section className="call-to-action bg-warning py-5 text-center">
                <div className="container">
                    <h2>Contribua para a Saúde Pública</h2>
                    <p>Encoraje a conscientização sobre doenças não transmissíveis e apoie políticas de saúde que promovam ambientes saudáveis.</p>
                    <button className="btn btn-lg btn-secondary">Engaje-se</button>
                </div>
            </section>
        </div>
    );
}

export default DoencasNaoTransmissiveis;
