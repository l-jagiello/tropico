import React from 'react';
import OffersList from '../components/Offerlist'; // Używamy poprawnej nazwy komponentu

class Offer extends React.Component {
    render() {
        return (
            <>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="display-3 fw-light">Nasza oferta</h1>
                            <p className="lead text-body-secondary">
                                Nasze wycieczki są staranie tworzone z myślą o tym, by sprawiały jak najwięcej frajdy. Nieważne, czy jest to wasz miodowy miesiąc, czy też rodzinny wyjazd - z Tropico przeżyjesz niezaponianą podróż.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <OffersList />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Offer;
