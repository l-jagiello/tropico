import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return(
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/">O nas</Link></li>
                        <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/offer">Nasza oferta</Link></li>
                        <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/contact">Kontakt</Link></li>
                    </ul>
                    <p className="text-center text-body-secondary">© 2024 Tropico sp. z o.o.</p>
                </footer>
            </div>
        )
    }
}

export default Footer;