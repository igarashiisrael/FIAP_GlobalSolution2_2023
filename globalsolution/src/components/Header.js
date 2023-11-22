import './../css/Header.css'
import Banner from './../img/saude.png'

function Header(){

    return(
        <>
            <div class="box">
                <div>
                    <h1 class="logo">SaudeAPP</h1>
                </div>
                <div>
                    <a class="botao" href="#">Home</a>
                    <a class="botao" href="#">Mortalidade Infantil</a>
                    <a class="botao" href="#">Doenças Transmissíveis</a>
                    <a class="botao" href="#">Doenças não Transmissíveis</a>
                    <a class="botao" href="#">Melhoria Geral da Saúde</a>
                </div>
            </div>
        </>
    )
}

export default Header