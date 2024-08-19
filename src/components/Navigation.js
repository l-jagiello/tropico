import React from 'react';
import { Link } from 'react-router-dom';
import palma from '../assets/palma.png';

class Navigation extends React.Component {
    render() {
        return (
            <div id="nav">
                <nav className="navbar navbar-expand-lg navbar-dark bg-warning py-3 sticky-top">
                    <div className="container">
                        <a className="navbar-brand" to="/">
                            <img src={palma} alt="Palma Logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <Link className="nav-link px-lg-3" to="/">O nas</Link>
                                <Link className="nav-link px-lg-3" to="/offer">Nasza oferta</Link>
                                <Link className="nav-link px-lg-3" to="/contact">Kontakt</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;
