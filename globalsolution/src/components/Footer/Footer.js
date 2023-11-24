import './Footer.css'
function Footer() {

    const validarEmail = () => {
        var emailInput = document.querySelector('.input-email');
        var email = emailInput.value;
        var emailRegex = /\S+@\S+\.\S+/;

        if (emailRegex.test(email)) {
            alert("Seu e-mail foi cadastrado, muito obrigado!");
        } else {
            alert("Por favor, insira um e-mail válido.");
        }
    }

    return (
        <footer className="text-center text-lg-start fundo-verde text-muted pt-1">
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3 text-secondary"></i>SaudeAPP
                            </h6>
                            <p>
                                O SaúdeApp é uma inovação no campo da saúde, proporcionando acesso simplificado e eficiente a serviços médicos essenciais. Suas funcionalidades abrangentes estão redefinindo a forma como as pessoas gerenciam suas informações médicas e interagem com o Sistema Único de Saúde (SUS).
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Nossa Equipe
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Israel Igarashi - RM 98359</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Leonardo Bernardes - RM 99788</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Matheus Gouvêa - RM 97774</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Ryan Aquino - RM 550422</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Newsletter</h6>
                            <p>Cadastre seu e-mail ou telefone e fique por dentro das novidades sobre nossa plataforma!</p>
                            <input type="text" placeholder="Digite seu e-mail" className="form-control mb-3 input-email" />
                            <input type="text" placeholder="Digite seu telefone" className="form-control mb-3 input-telefone valida-telefone" />
                            <button className="btn" onClick={validarEmail}>Inscrever-se</button>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Patrocinadores do FIAP - GLOBAL SOLUTION
                            </h6>
                            <p>
                                <a href="https://www.fiap.com.br/" className="text-reset">FIAP</a>
                            </p>
                            <p>
                                <a href="https://www.hapvidandi.com.br/" className="text-reset">Hapvida NotreDame Intermédica</a>
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>


                </div>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
                © 2023 Copyright:
                <a className="text-reset fw-bold" href="#!">SaudeAPP</a>
            </div>
        </footer>
    );
}
export default Footer;