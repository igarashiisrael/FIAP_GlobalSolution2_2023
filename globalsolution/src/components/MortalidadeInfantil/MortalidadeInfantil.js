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
                    <h2 className="text-center mb-4">Redução da Mortalidade Materna e Infantil no Brasil</h2>
                    <div className="row text-center">
                        <div className="col-md-4 mb-3">
                            {/* <h3>Causas Comuns</h3> */}
                            <p>De 1990 a 2019 houve redução da TMI no Brasil e em todas as Regiões. Em 2019, no Brasil, estima-se que ocorreram 38.619 óbitos infantis, implicando em uma taxa de cobertura de óbito infantil de 91,4% e uma TMI de 13,3 óbitos por mil NV, retornando ao mesmo patamar de 2015. As maiores reduções foram observadas nos estados da Região Nordeste. Em 2019, a menor e a maior TMI foram estimadas para o Distrito Federal e o Amapá, com 8,5 e 22,9 óbitos para cada mil NV, respectivamente.</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            {/* <h3>Impacto Global</h3> */}
                            <p>Em todas as Regiões, exceto a Região Sul, houve um discreto aumento da TMI em 2016 ocasionado, provavelmente, pela epidemia de vírus Zika, que levou à queda da natalidade e à morte de bebês com malformações graves, e a crise econômica, que ocasionou um aumento no número de óbitos por causas evitáveis10. Dos óbitos notificados ao SIM em 2019, 80,3% foram investigados, variando de 55% na Bahia até 99% no Distrito Federal.</p>
                        </div>
                        {<div className="col-md-4 mb-3">
                            {/* <h3>Prevenção</h3> */}
                            <p>Ao longo de 2020, houve uma notável redução da natalidade no Brasil, de modo que, ao todo, 2.730.145 nascimentos foram registrados – a tendência de queda foi observada em todas as regiões do País. Dos fetos nascidos vivos, 71% vieram de mulheres que realizaram sete ou mais consultas de pré-natal durante a gestação, e 78,5% nasceram de mulheres que iniciaram o pré-natal no 1º trimestre gestacional, indicando um pequeno aumento de 0,1% em relação aos dados obtidos em 2019. </p>
                        </div>}
                        <div className="col-md-12 mb-3">
                            <p>Por outro lado, 7,8% dos nascidos vivos em 2020 descenderam de mulheres que realizaram no máximo três consultas de pré-natal durante toda a gestação. Este cenário aponta uma grande diferença regional e reflete divergências sociais e econômicas, visto que 18% dos casos ocorreram no Norte, contra 4% no Sul. </p>
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
