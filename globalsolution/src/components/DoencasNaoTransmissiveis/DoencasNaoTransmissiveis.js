import React from 'react';
import NonTransmissibleDiseasesImage from '../../../src/img/saude.webp'; // Certifique-se de que o caminho está correto

function DoencasNaoTransmissiveis() {
    return (
        <div>
            <section className="hero-section d-flex align-items-center justify-content-center">
                <img src={NonTransmissibleDiseasesImage} className="img-fluid" alt="Imagem representativa de Doenças Não Transmissíveis" />
            </section>

            <section className="features bg-info py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2">
                            <img src={NonTransmissibleDiseasesImage} className="img-fluid" alt="Doenças Não Transmissíveis" />
                        </div>
                        <div className="col-md-6 order-md-1 text-center">
                            <h2>Doenças Não Transmissíveis</h2>
                            <p>Descrição detalhada sobre doenças crônicas como diabetes, hipertensão e câncer, que não são passadas de pessoa para pessoa.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="primary-content bg-light py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center order-md-1">
                            <h2>Estilos de Vida Saudáveis</h2>
                            <p>Informações sobre como a alimentação balanceada, atividade física regular e evitar o tabagismo podem prevenir doenças não transmissíveis.</p>
                        </div>
                        <div className="col-md-6 order-md-2">
                            <img src={NonTransmissibleDiseasesImage} className="img-fluid" alt="Estilos de Vida Saudáveis" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="secondary-content bg-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2">
                            <img src={NonTransmissibleDiseasesImage} className="img-fluid" alt="Prevenção de Doenças Não Transmissíveis" />
                        </div>
                        <div className="col-md-6 order-md-1 text-center">
                            <h2>Prevenção e Controle</h2>
                            <p>Estratégias de saúde pública para controle e prevenção de doenças não transmissíveis, incluindo exames regulares e monitoramento da saúde.</p>
                        </div>
                    </div>
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
