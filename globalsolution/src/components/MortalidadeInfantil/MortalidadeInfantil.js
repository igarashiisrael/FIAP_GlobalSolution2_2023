import React from 'react';
import Hero from '../../../src/img/mortalidade-infantil.jpg';
import ImageMortalidade from '../../../src/img/mortalidadeInfantil.png';
import './MortalidadeInfantil.css';
function MortalidadeInfantil() {
    return (
        <div>
            <section className="hero-image2">
                <img src={Hero} className="img-fluid hero" alt="Imagem representativa de Mortalidade Infantil" />
            </section>

            <section className="features pitch-box py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Redução da Mortalidade Materna e Infantil no Brasil</h2>
                    <div className="row text-center">
                        <div className="col-md-4 mb-3">
                            <p>De 1990 a 2019 houve redução da TMI no Brasil e em todas as Regiões. Em 2019, no Brasil, estima-se que ocorreram 38.619 óbitos infantis, implicando em uma taxa de cobertura de óbito infantil de 91,4% e uma TMI de 13,3 óbitos por mil NV, retornando ao mesmo patamar de 2015. As maiores reduções foram observadas nos estados da Região Nordeste. Em 2019, a menor e a maior TMI foram estimadas para o Distrito Federal e o Amapá, com 8,5 e 22,9 óbitos para cada mil NV, respectivamente.</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <p>Em todas as Regiões, exceto a Região Sul, houve um discreto aumento da TMI em 2016 ocasionado, provavelmente, pela epidemia de vírus Zika, que levou à queda da natalidade e à morte de bebês com malformações graves, e a crise econômica, que ocasionou um aumento no número de óbitos por causas evitáveis10. Dos óbitos notificados ao SIM em 2019, 80,3% foram investigados, variando de 55% na Bahia até 99% no Distrito Federal.</p>
                        </div>
                        {<div className="col-md-4 mb-3">
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
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-center">Mortalidade materna e causas</h2>
                            <p>Ao todo, foram notificados 1.965 casos de mortalidade materna no decorrer do ano de 2020. Através da aplicação do fator de correção pela Razão de Mortalidade Materna (RMM), a estimativa do número de óbitos passa para 2.039. Com isso, houve um aumento acentuado no número de mortes de acordo com a RMM, já que em 2019 a taxa era de 57,9 óbitos maternos a cada 100 mil nascidos vivos, número que passou para 74,7 em 2020.</p>
                            <p>Entre 2019 e 2020, todas as unidades federativas apresentaram aumento na RMM. Entretanto, no ano em que a pandemia de Covid-19 eclodiu no Brasil, os índices de mortalidade materna acima de 100 óbitos para cada 100.000 nascidos vivos foram identificados nos estados do Amazonas, Pará, Amapá, Maranhão e Piauí – todos do Norte e Nordeste.</p>
                            <p>Os óbitos maternos resultados por causas obstétricas diretas totalizaram 1.041 em 2020, enquanto os óbitos por causas obstétricas indiretas foram 843, aumento importante em relação ao ano anterior (479), o que se caracteriza como uma questão de saúde pública que preocupa autoridades.</p>
                            <p>Dentre as causas obstétricas diretas registradas em 2020, tiveram destaque: hipertensão, com 317 óbitos, hemorragia (195), infecção puerperal (76) e aborto (57). Por sua vez, nas causas obstétricas indiretas, destaque para doenças infecciosas e parasitárias (476), do aparelho circulatório (111) e do aparelho respiratório (54).</p>
                            <p>No que diz respeito ao óbito materno associado à Covid-19, os maiores apontamentos ocorreram entre maio e agosto, período que ficou popularmente conhecido como “onda” de mortes maternas interligadas ao corona vírus, tendo o seu pico no mês de maio. O Sul foi a região que apresentou o menor percentual de óbitos maternos associados à Covid-19 em 2020, totalizando 10%.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={ImageMortalidade} className="img-fluid" alt="Imagem representativa de Mortalidade Materna" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="secondary-content pitch-box py-5">
                <div className="container">
                    <h2 className="text-center">Características dos óbitos</h2>
                    <p>De acordo com a Organização Mundial da Saúde, a taxa global de mortalidade infantil diminuiu consideravelmente nos últimos anos, mas ainda há muito trabalho a ser feito. Em 2021, aproximadamente 5 milhões de crianças morreram antes de alcançar o quinto aniversário.</p>
                    <p>É possível notar que a taxa de mortalidade está diretamente ligada a razões sociais quando se observa que somente 13% das mulheres falecidas por causas maternas possuíam 12 anos ou mais de escolaridade.</p>
                    <p>É válido destacar que atualmente o Brasil segue os Objetivos de Desenvolvimento Sustentável (ODS), implementando como sua principal meta atingir, no máximo, 30 mortes maternas para cada 100 mil nascidos até 2030. Sendo assim, o Ministério da Saúde acentua a importância da realização do pré-natal durante todos os estágios da gravidez, reduzindo as chances de risco para o feto e a gestante.</p>
                    <p>A questão da mortalidade materna e infantil no Brasil é um problema sério, não só no Brasil como no mundo, por isso as metas da ODS 3 são: Meta 3.1: visa reduzir a taxa de mortalidade materna global para menos de 70 mortes por 100.000 nascidos vivos até 2030. Meta 3.2: busca eliminar as mortes evitáveis de recém-nascidos e crianças menores de 5 anos, com metas específicas de mortalidade neonatal e infantil.</p>
                    <p>Observa-se que os problemas envolvidos nessa causa reflete um problema brasileiro ao qual queremos resolver, falta de gerenciamento que faz com que os pacientes fiquem a mercê de suas próprias forças, fazendo com que os sistemas de saúdes públicos sejam praticamente inúteis e a condição de saúde seja regida pelo dinheiro, nosso projeto propõe-se a resolver tal usando de gerenciamento e automação fazendo com que os sistemas de saúde cometam menos erros por questões humanas e os processos sejam mais rápidos e assertivos fazendo com que mortes evitáveis sejam evitados!</p>
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
