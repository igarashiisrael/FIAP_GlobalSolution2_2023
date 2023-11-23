import React from 'react';
import Banner from '../../img/saude.webp';

function HomePage() {
    return (
        <>
            <img className="banner" src={Banner} alt="Banner" />

            <div className="pitch-box">
                <div className="texto-pitch">
                    <h2>Vídeo do Pitch</h2>
                    <p>bla bla bla</p>
                </div>
                <div className="video-pitch">
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                </div>
            </div>
        </>
    );
}

export default HomePage;
