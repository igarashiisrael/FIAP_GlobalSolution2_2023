import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SaudeAPP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home-page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mortalidade-infantil">Mortalidade Infantil</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/doencas-transmissiveis">Doenças Transmissíveis</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/doencas-nao-transmissiveis">Doenças não Transmissíveis</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/melhoria-geral-da-saude">Melhoria Geral da Saúde</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
