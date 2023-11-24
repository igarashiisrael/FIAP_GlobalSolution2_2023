import React from 'react';
import Hero from '../../../src/img/saude.webp'; 
import Virus from '../../../src/img/virus.jpeg';
import Remedio from '../../../src/img/remedios.jpeg'
import Mundo from '../../../src/img/mundo.webp'
import './DoencasTransmissiveis.css'

function DoencasTransmissiveis() {
    return (
        <div>
            <section className="hero-section d-flex align-items-center justify-content-center">
                <img src={Hero} className="img-fluid" alt="Imagem representativa de Doenças Transmissíveis" />
            </section>

            <section className="features py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={Virus} className="img-fluid teste" alt="Prevenção de Doenças Transmissíveis" />
                        </div>
                        <div className="col-md-6 text-center">
                            <h2>Prevenção de Doenças Transmissíveis</h2>
                            <p class="texto">Em 1975, em meio a uma grave crise sanitária no país, com epidemia de doença meningocócica, aumento da mortalidade infantil e grande aumento dos acidentes de trabalho, se dá a organização do Sistema Nacional de Saúde – propondo a integração da medicina previdenciária e da Saúde Pública, através da rearticulação entre as diversas esferas do governo: Ministérios, Secretarias Estaduais e Municipais de Saúde e entre órgãos governamentais e setor privado.</p>
                        </div>
                        <p class="texto texto-info">Propõe-se a elaboração de programas regionais que integram num todo harmônico as atividades preventivas, curativas e de reabilitação incluindo a participação de todos os órgãos públicos e privados que atuam na região de modo a organizá-los segundo hierarquia técnica condizente com a área assistida. No entanto, o que se consolidou foi a centralização das decisões e mesmo da execução de parte das ações de saúde pública, no nível federal. Por outro lado, permanece a desarticulação entre as atribuições cabíveis a cada ministério, muito diferentes no que se refere a poder político e financeiro, com a separação entre a medicina preventiva, objeto das ações do Ministério da Saúde, e curativa, cujas ações são atribuídas ao Ministério da Previdência e Assistência Social. </p>
                    </div>
                </div>
            </section>

            <section className="primary-content prevencao py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <p class="texto">É neste contexto que se dá a criação do Sistema de Vigilância Epidemiológica, do Plano Nacional de Imunização e do Sistema Nacional de Vigilância Sanitária. Com a criação destes Sistemas consolida-se, no conjunto das práticas de saúde coletiva, a dissociação entre a Vigilância Epidemiológica, que responde pelo controle de doenças, particularmente das doenças transmissíveis, e a Vigilância Sanitária, responsável pela fiscalização de portos, aeroportos, fronteiras, medicamentos, alimentos, cosméticos e bens. </p>
                            <p class="texto">Apesar dessas atividades terem sido ampliadas e de serem definidas inter-relações entre as duas estruturas, a automatização dessas práticas se consolidou.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={Remedio} className="img-fluid teste" alt="Tratamento de Doenças Transmissíveis" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="secondary-content bg-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={Mundo} className="img-fluid" alt="Impacto Global das Doenças Transmissíveis" />
                        </div>
                        <div className="col-md-6 text-center">
                            <h2>Impacto Global</h2>
                            <p class="texto">As doenças transmissíveis no Brasil é um grande problema, mas não só no Brasil, como no mundo, por isso que a ODS 3 tem o projeto de: Meta 3.3: concentra-se em acabar com epidemias como AIDS, tuberculose, malária e outras doenças tropicais negligenciadas. Enfatiza também o combate contra hepatite, doenças transmitidas pela água e outras doenças transmissíveis.</p>
                            <p class="texto">Nota-se que as doenças transmissíveis no Brasil passaram por algumas crises, e mesmo com a criação de sistemas para solucionar este caso, observamos pelo Covid19 e como ele afetou o Brasil de que os sistemas mesmo ajudando não resolveram a situação. Nosso projeto em situações de crises como essas seria perfeito para o gerenciamento, acessibilidade e disponibilização de serviços de saúde ajudando a resolver essa e outras crises.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="call-to-action bg-warning py-5 text-center">
                <div className="container">
                    <h2>Faça a Diferença</h2>
                    <p class="texto">Engaje-se em práticas de prevenção e apoie campanhas de saúde pública para combater doenças transmissíveis em sua comunidade.</p>
                    <button className="btn btn-lg btn-secondary">Participe</button>
                </div>
            </section>
        </div>
    );
}

export default DoencasTransmissiveis;
