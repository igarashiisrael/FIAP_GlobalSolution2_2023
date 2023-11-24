import React from 'react';
import Hero from '../../../src/img/saude.webp'; // Ajuste o caminho conforme necessário

function DoencasTransmissiveis() {
    return (
        <div>
            <section className="hero-section d-flex align-items-center justify-content-center">
                <img src={Hero} className="img-fluid" alt="Imagem representativa de Doenças Transmissíveis" />
            </section>

            <section className="features bg-info py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={Hero} className="img-fluid" alt="Prevenção de Doenças Transmissíveis" />
                        </div>
                        <div className="col-md-6 text-center">
                            <h2>Prevenção de Doenças Transmissíveis</h2>
                            <p>Descrição detalhada das medidas de prevenção, como vacinação, higiene pessoal, uso de mosquiteiros etc.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="primary-content bg-light py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <h2>Tratamento e Cuidados</h2>
                            <p>Informações sobre tratamentos disponíveis, cuidados médicos necessários e a importância do diagnóstico precoce.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={Hero} className="img-fluid" alt="Tratamento de Doenças Transmissíveis" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="secondary-content bg-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={Hero} className="img-fluid" alt="Impacto Global das Doenças Transmissíveis" />
                        </div>
                        <div className="col-md-6 text-center">
                            <h2>Impacto Global</h2>
                            <p>Análise do efeito das doenças transmissíveis em todo o mundo, destacando a importância da cooperação internacional na luta contra essas doenças.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="call-to-action bg-warning py-5 text-center">
                <div className="container">
                    <h2>Faça a Diferença</h2>
                    <p>Engaje-se em práticas de prevenção e apoie campanhas de saúde pública para combater doenças transmissíveis em sua comunidade.</p>
                    <button className="btn btn-lg btn-secondary">Participe</button>
                </div>
            </section>
        </div>
    );
}

export default DoencasTransmissiveis;
