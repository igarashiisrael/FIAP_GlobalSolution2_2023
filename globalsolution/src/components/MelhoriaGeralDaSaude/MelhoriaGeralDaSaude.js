import Hero from '../../img/bootstrap-hero-image-component-jpg.webp';
import './MelhoriaGeralDaSaude.css'
function MelhoriaGeralDaSaude() {

    return (
        <div>
            <section className="hero-image">
                <img src={Hero} className="img-fluid" alt="Hero" />
            </section>

            <section className="features bg-info py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <div className="feature">
                                <h2>Easy to Edit</h2>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature">
                                <h2>Layered PSD</h2>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature">
                                <h2>Ready to Go</h2>
                                <p>Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="primary-content bg-danger py-5">
                <div className="container">
                    <h2 className="text-center">FEATURED CONTENT</h2>
                    {/* Insert primary content here */}
                </div>
            </section>

            <section className="secondary-content bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="secondary">
                                <h3>Secondary Content</h3>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="secondary">
                                <h3>Secondary Content</h3>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="secondary">
                                <h3>Secondary Content</h3>
                                <p>Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="call-to-action bg-warning py-5 text-center">
                <h2>HEARD ENOUGH?</h2>
                <button className="btn btn-lg btn-secondary">Get Started</button>
            </section>
        </div>
    );
}
export default MelhoriaGeralDaSaude;