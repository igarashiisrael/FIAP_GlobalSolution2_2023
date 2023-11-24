import React from 'react';
import Hero from '../../../src/img/saude.webp';

function MortalidadeInfantil() {
    return (
        <div>
            <section className="hero-image">
                <img src={Hero} className="img-fluid" alt="Imagem representativa de Mortalidade Infantil" />
            </section>

            <section className="features bg-info py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Informações sobre Mortalidade Infantil</h2>
                    <div className="row text-center">
                        {/* Exemplo de bloco de informação */}
                        <div className="col-md-4 mb-3">
                            <h3>Causas Comuns</h3>
                            <p>As principais causas incluem complicações durante o parto, infecções como pneumonia e diarréia, e nascimento prematuro.</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h3>Impacto Global</h3>
                            <p>A mortalidade infantil é um indicador crítico de saúde e bem-estar em uma sociedade. A maioria das mortes ocorre em países em desenvolvimento.</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h3>Prevenção</h3>
                            <p>Muitas mortes podem ser prevenidas com acesso a serviços de saúde de qualidade, nutrição adequada e práticas de higiene.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="primary-content bg-light py-5">
                <div className="container">
                    <h2 className="text-center">Prevenção e Cuidados</h2>
                    <p>Intervenções eficazes incluem amamentação adequada, vacinações, suplementação de vitaminas e acesso a água limpa. Educação para mães sobre cuidados na gravidez e reconhecimento de sinais de perigo também são cruciais.</p>
                </div>
            </section>

            <section className="secondary-content bg-white py-5">
                <div className="container">
                    <h2 className="text-center">Estatísticas e Dados</h2>
                    <p>De acordo com a Organização Mundial da Saúde, a taxa global de mortalidade infantil diminuiu consideravelmente nos últimos anos, mas ainda há muito trabalho a ser feito. Em 2021, aproximadamente 5 milhões de crianças morreram antes de alcançar o quinto aniversário.</p>
                </div>
            </section>

            <section className="call-to-action bg-warning py-5 text-center">
                <h2>Participe da Mudança</h2>
                <p>Como você pode ajudar a reduzir a mortalidade infantil</p>
                <button className="btn btn-lg btn-secondary">Saiba Mais</button>
            </section>
        </div>
    );
}

export default MortalidadeInfantil;
